export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Address: {
        Row: {
          createdAt: string
          district: string
          division: string
          id: string
          map: string | null
          propertyId: string
          updateAt: string
          upzila: string
        }
        Insert: {
          createdAt?: string
          district: string
          division: string
          id: string
          map?: string | null
          propertyId: string
          updateAt: string
          upzila: string
        }
        Update: {
          createdAt?: string
          district?: string
          division?: string
          id?: string
          map?: string | null
          propertyId?: string
          updateAt?: string
          upzila?: string
        }
        Relationships: [
          {
            foreignKeyName: "Address_propertyId_fkey"
            columns: ["propertyId"]
            isOneToOne: false
            referencedRelation: "Property"
            referencedColumns: ["id"]
          },
        ]
      }
      info: {
        Row: {
          area: number | null
          available: string | null
          bathroom: number
          bedroom: number
          category: Database["public"]["Enums"]["property_type"]
          createdAt: string
          floor_no: number | null
          gender: Database["public"]["Enums"]["gender"]
          id: string
          propertyId: string
          updateAt: string
        }
        Insert: {
          area?: number | null
          available?: string | null
          bathroom: number
          bedroom: number
          category: Database["public"]["Enums"]["property_type"]
          createdAt?: string
          floor_no?: number | null
          gender: Database["public"]["Enums"]["gender"]
          id: string
          propertyId: string
          updateAt: string
        }
        Update: {
          area?: number | null
          available?: string | null
          bathroom?: number
          bedroom?: number
          category?: Database["public"]["Enums"]["property_type"]
          createdAt?: string
          floor_no?: number | null
          gender?: Database["public"]["Enums"]["gender"]
          id?: string
          propertyId?: string
          updateAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "info_propertyId_fkey"
            columns: ["propertyId"]
            isOneToOne: false
            referencedRelation: "Property"
            referencedColumns: ["id"]
          },
        ]
      }
      Preference: {
        Row: {
          accentColor: string
          appearance: string
          grayColor: string
          id: string
          radius: string
          scaling: string
        }
        Insert: {
          accentColor: string
          appearance: string
          grayColor: string
          id: string
          radius: string
          scaling: string
        }
        Update: {
          accentColor?: string
          appearance?: string
          grayColor?: string
          id?: string
          radius?: string
          scaling?: string
        }
        Relationships: []
      }
      Property: {
        Row: {
          createdAt: string
          id: string
          images: string[] | null
          price: number
          summary: string | null
          title: string
          updateAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          id: string
          images?: string[] | null
          price: number
          summary?: string | null
          title: string
          updateAt: string
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          images?: string[] | null
          price?: number
          summary?: string | null
          title?: string
          updateAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Property_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
        ]
      }
      Users: {
        Row: {
          avatar: string | null
          createdAt: string
          email: string
          fcm_token: string | null
          fullName: string | null
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updateAt: string
        }
        Insert: {
          avatar?: string | null
          createdAt?: string
          email: string
          fcm_token?: string | null
          fullName?: string | null
          id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updateAt: string
        }
        Update: {
          avatar?: string | null
          createdAt?: string
          email?: string
          fcm_token?: string | null
          fullName?: string | null
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updateAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "MALE" | "FEMALE"
      property_type:
        | "FAMILY"
        | "BACHELOR"
        | "OFFICE"
        | "SUBLET"
        | "HOSTEL"
        | "SHOP"
      user_role: "ADMIN" | "USER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      gender: ["MALE", "FEMALE"],
      property_type: [
        "FAMILY",
        "BACHELOR",
        "OFFICE",
        "SUBLET",
        "HOSTEL",
        "SHOP",
      ],
      user_role: ["ADMIN", "USER"],
    },
  },
} as const
