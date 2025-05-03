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
      Booking: {
        Row: {
          createdAt: string
          id: string
          pointsUsed: number
          propertyId: string
          userId: string
        }
        Insert: {
          createdAt?: string
          id: string
          pointsUsed: number
          propertyId: string
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          pointsUsed?: number
          propertyId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Booking_propertyId_fkey"
            columns: ["propertyId"]
            isOneToOne: false
            referencedRelation: "Property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Booking_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
        ]
      }
      Property: {
        Row: {
          createdAt: string
          gender: string | null
          id: string
          propertyAvailable: string
          propertyBalcony: string | null
          propertyBathroom: string
          propertyBedroom: string
          propertyBookingStatus: boolean
          propertyCategory: string
          propertyDescription: string | null
          propertyDistrict: string
          propertyDivision: string
          propertyFloor: string | null
          propertyHouseNo: string | null
          propertyImages: string[] | null
          propertyInclude: string[] | null
          propertyPrice: string
          propertyPriceType: Database["public"]["Enums"]["PriceType"]
          propertyRoadNo: string | null
          propertySeat: string | null
          propertySectorNo: string | null
          propertyShortAddress: string
          propertySize: string | null
          propertyType: Database["public"]["Enums"]["PropertyType"]
          propertyUpzila: string
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          gender?: string | null
          id: string
          propertyAvailable: string
          propertyBalcony?: string | null
          propertyBathroom: string
          propertyBedroom: string
          propertyBookingStatus: boolean
          propertyCategory: string
          propertyDescription?: string | null
          propertyDistrict: string
          propertyDivision: string
          propertyFloor?: string | null
          propertyHouseNo?: string | null
          propertyImages?: string[] | null
          propertyInclude?: string[] | null
          propertyPrice: string
          propertyPriceType: Database["public"]["Enums"]["PriceType"]
          propertyRoadNo?: string | null
          propertySeat?: string | null
          propertySectorNo?: string | null
          propertyShortAddress: string
          propertySize?: string | null
          propertyType: Database["public"]["Enums"]["PropertyType"]
          propertyUpzila: string
          updatedAt: string
          userId: string
        }
        Update: {
          createdAt?: string
          gender?: string | null
          id?: string
          propertyAvailable?: string
          propertyBalcony?: string | null
          propertyBathroom?: string
          propertyBedroom?: string
          propertyBookingStatus?: boolean
          propertyCategory?: string
          propertyDescription?: string | null
          propertyDistrict?: string
          propertyDivision?: string
          propertyFloor?: string | null
          propertyHouseNo?: string | null
          propertyImages?: string[] | null
          propertyInclude?: string[] | null
          propertyPrice?: string
          propertyPriceType?: Database["public"]["Enums"]["PriceType"]
          propertyRoadNo?: string | null
          propertySeat?: string | null
          propertySectorNo?: string | null
          propertyShortAddress?: string
          propertySize?: string | null
          propertyType?: Database["public"]["Enums"]["PropertyType"]
          propertyUpzila?: string
          updatedAt?: string
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
      saveProperty: {
        Row: {
          id: string
          propertyId: string
          userId: string
        }
        Insert: {
          id: string
          propertyId: string
          userId: string
        }
        Update: {
          id?: string
          propertyId?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "saveProperty_propertyId_fkey"
            columns: ["propertyId"]
            isOneToOne: false
            referencedRelation: "Property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saveProperty_userId_fkey"
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
          point: number
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
          point?: number
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
          point?: number
          role?: Database["public"]["Enums"]["user_role"]
          updateAt?: string
        }
        Relationships: []
      }
      WalletTransaction: {
        Row: {
          createdAt: string
          id: string
          meta: Json | null
          points: number
          reason: string | null
          type: Database["public"]["Enums"]["WalletTransactionType"]
          userId: string
        }
        Insert: {
          createdAt?: string
          id: string
          meta?: Json | null
          points: number
          reason?: string | null
          type: Database["public"]["Enums"]["WalletTransactionType"]
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          meta?: Json | null
          points?: number
          reason?: string | null
          type?: Database["public"]["Enums"]["WalletTransactionType"]
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "WalletTransaction_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      PriceType: "daily" | "weekly" | "monthly"
      PropertyType:
        | "house"
        | "unit"
        | "room"
        | "flat"
        | "floor"
        | "apartment"
        | "seat"
      user_role: "ADMIN" | "USER"
      WalletTransactionType: "RECHARGE" | "BOOKING" | "REFUND" | "ADJUSTMENT"
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
      PriceType: ["daily", "weekly", "monthly"],
      PropertyType: [
        "house",
        "unit",
        "room",
        "flat",
        "floor",
        "apartment",
        "seat",
      ],
      user_role: ["ADMIN", "USER"],
      WalletTransactionType: ["RECHARGE", "BOOKING", "REFUND", "ADJUSTMENT"],
    },
  },
} as const
