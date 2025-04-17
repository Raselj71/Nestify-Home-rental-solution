import { Tables } from "@/utils/Database";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

type MergedUser = User & Tables<"Users">;

export function useAuth() {
  const supabase = createClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["auth-user"],
    queryFn: async () => {
      const { data: authData, error: authError } =
        await supabase.auth.getUser();

      if (authError || !authData.user) {
        return null;
      }

      const { data: dbUser } = await supabase
        .from("Users")
        .select()
        .eq("id", authData.user.id)
        .single();
      if (!dbUser) {
        return null;
      }

      return { 
        ...authData.user, 
        ...dbUser, 
        phone: dbUser.phone ?? null 
      };
    },
  });

  return { user: user as MergedUser | null, loading: isLoading };
}
