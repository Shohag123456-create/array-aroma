export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      all_engagement_jcm: {
        Row: {
          breadth_general_engagement_rate_2024: string | null
          commitment_score: string | null
          country: string | null
          depth_of_engagement_2024: string | null
          firm_intranet_name: string | null
          gdp_fdi: string | null
          maturity_overall: string | null
          maturity_overall_score: string | null
          member_firm_name: string | null
          quality_of_engagement_2024: string | null
          ranking: string | null
          ranking_impact_score: string | null
          referrals_in: string | null
          referrals_in_impact_score: string | null
          referrals_out: string | null
          referrals_out_impact_score: string | null
          region_name: string | null
          total_engagement: string | null
          total_impact_score: string | null
          turnover: string | null
          turnover_impact_score: string | null
        }
        Insert: {
          breadth_general_engagement_rate_2024?: string | null
          commitment_score?: string | null
          country?: string | null
          depth_of_engagement_2024?: string | null
          firm_intranet_name?: string | null
          gdp_fdi?: string | null
          maturity_overall?: string | null
          maturity_overall_score?: string | null
          member_firm_name?: string | null
          quality_of_engagement_2024?: string | null
          ranking?: string | null
          ranking_impact_score?: string | null
          referrals_in?: string | null
          referrals_in_impact_score?: string | null
          referrals_out?: string | null
          referrals_out_impact_score?: string | null
          region_name?: string | null
          total_engagement?: string | null
          total_impact_score?: string | null
          turnover?: string | null
          turnover_impact_score?: string | null
        }
        Update: {
          breadth_general_engagement_rate_2024?: string | null
          commitment_score?: string | null
          country?: string | null
          depth_of_engagement_2024?: string | null
          firm_intranet_name?: string | null
          gdp_fdi?: string | null
          maturity_overall?: string | null
          maturity_overall_score?: string | null
          member_firm_name?: string | null
          quality_of_engagement_2024?: string | null
          ranking?: string | null
          ranking_impact_score?: string | null
          referrals_in?: string | null
          referrals_in_impact_score?: string | null
          referrals_out?: string | null
          referrals_out_impact_score?: string | null
          region_name?: string | null
          total_engagement?: string | null
          total_impact_score?: string | null
          turnover?: string | null
          turnover_impact_score?: string | null
        }
        Relationships: []
      }
      cars_year_make_model_master_advanced: {
        Row: {
          body: string | null
          engine: string | null
          engine_liter: string | null
          id: string
          make: string | null
          model: string | null
          submodel: string | null
          trim: string | null
          vehicle_display_name: string | null
          year: number | null
          ymm_id: number | null
        }
        Insert: {
          body?: string | null
          engine?: string | null
          engine_liter?: string | null
          id?: string
          make?: string | null
          model?: string | null
          submodel?: string | null
          trim?: string | null
          vehicle_display_name?: string | null
          year?: number | null
          ymm_id?: number | null
        }
        Update: {
          body?: string | null
          engine?: string | null
          engine_liter?: string | null
          id?: string
          make?: string | null
          model?: string | null
          submodel?: string | null
          trim?: string | null
          vehicle_display_name?: string | null
          year?: number | null
          ymm_id?: number | null
        }
        Relationships: []
      }
      conf_feedbacks: {
        Row: {
          ata2024: number | null
          cambridge: number | null
          company_ata: string | null
          company_cambridge: string | null
          company_global: string | null
          company_regional: string | null
          company_sports: string | null
          global_2024: number | null
          regional: number | null
          sports2024: number | null
        }
        Insert: {
          ata2024?: number | null
          cambridge?: number | null
          company_ata?: string | null
          company_cambridge?: string | null
          company_global?: string | null
          company_regional?: string | null
          company_sports?: string | null
          global_2024?: number | null
          regional?: number | null
          sports2024?: number | null
        }
        Update: {
          ata2024?: number | null
          cambridge?: number | null
          company_ata?: string | null
          company_cambridge?: string | null
          company_global?: string | null
          company_regional?: string | null
          company_sports?: string | null
          global_2024?: number | null
          regional?: number | null
          sports2024?: number | null
        }
        Relationships: []
      }
      conferences: {
        Row: {
          affinity_tools: number | null
          ata_2024: number | null
          communities_day: string | null
          communities_days_number: string | null
          coursera: string | null
          coursera_number: number | null
          engage_cambridge: number | null
          firm: string | null
          firm_affinity_tools: string | null
          firm_ata: string | null
          firm_engage_cambridge: string | null
          firm_sports: string | null
          firm_summit: string | null
          name_of_unique_intranet_users: string | null
          number_of_unique_internet_users: number | null
          pro_bono: string | null
          pro_bono_number: number | null
          regional_2024: number | null
          sports_2024: number | null
          summit_2024: number | null
        }
        Insert: {
          affinity_tools?: number | null
          ata_2024?: number | null
          communities_day?: string | null
          communities_days_number?: string | null
          coursera?: string | null
          coursera_number?: number | null
          engage_cambridge?: number | null
          firm?: string | null
          firm_affinity_tools?: string | null
          firm_ata?: string | null
          firm_engage_cambridge?: string | null
          firm_sports?: string | null
          firm_summit?: string | null
          name_of_unique_intranet_users?: string | null
          number_of_unique_internet_users?: number | null
          pro_bono?: string | null
          pro_bono_number?: number | null
          regional_2024?: number | null
          sports_2024?: number | null
          summit_2024?: number | null
        }
        Update: {
          affinity_tools?: number | null
          ata_2024?: number | null
          communities_day?: string | null
          communities_days_number?: string | null
          coursera?: string | null
          coursera_number?: number | null
          engage_cambridge?: number | null
          firm?: string | null
          firm_affinity_tools?: string | null
          firm_ata?: string | null
          firm_engage_cambridge?: string | null
          firm_sports?: string | null
          firm_summit?: string | null
          name_of_unique_intranet_users?: string | null
          number_of_unique_internet_users?: number | null
          pro_bono?: string | null
          pro_bono_number?: number | null
          regional_2024?: number | null
          sports_2024?: number | null
          summit_2024?: number | null
        }
        Relationships: []
      }
      group_membership_by_firm: {
        Row: {
          groups_member: string | null
          member_firm: number | null
        }
        Insert: {
          groups_member?: string | null
          member_firm?: number | null
        }
        Update: {
          groups_member?: string | null
          member_firm?: number | null
        }
        Relationships: []
      }
      "hlb-firms": {
        Row: {
          accounting_tools: string | null
          audit_tools: string | null
          country_country_name: string | null
          country_market: string | null
          country_region: string | null
          firm_intranet_name: string | null
          member_firm_name: string | null
          membership_type: string | null
          practice_wide_tools: string | null
          tax_tools: string | null
          total_staff_inc_partners: string | null
          turnover_usd: string | null
          type: string | null
          usd_referrals_in: string | null
          usd_referrals_out: string | null
          website: string | null
        }
        Insert: {
          accounting_tools?: string | null
          audit_tools?: string | null
          country_country_name?: string | null
          country_market?: string | null
          country_region?: string | null
          firm_intranet_name?: string | null
          member_firm_name?: string | null
          membership_type?: string | null
          practice_wide_tools?: string | null
          tax_tools?: string | null
          total_staff_inc_partners?: string | null
          turnover_usd?: string | null
          type?: string | null
          usd_referrals_in?: string | null
          usd_referrals_out?: string | null
          website?: string | null
        }
        Update: {
          accounting_tools?: string | null
          audit_tools?: string | null
          country_country_name?: string | null
          country_market?: string | null
          country_region?: string | null
          firm_intranet_name?: string | null
          member_firm_name?: string | null
          membership_type?: string | null
          practice_wide_tools?: string | null
          tax_tools?: string | null
          total_staff_inc_partners?: string | null
          turnover_usd?: string | null
          type?: string | null
          usd_referrals_in?: string | null
          usd_referrals_out?: string | null
          website?: string | null
        }
        Relationships: []
      }
      impact_matrix: {
        Row: {
          commitment: string | null
          country: string | null
          firm_intranet_name: string | null
          impact: string | null
          member_firm_name: string | null
          region_name: string | null
        }
        Insert: {
          commitment?: string | null
          country?: string | null
          firm_intranet_name?: string | null
          impact?: string | null
          member_firm_name?: string | null
          region_name?: string | null
        }
        Update: {
          commitment?: string | null
          country?: string | null
          firm_intranet_name?: string | null
          impact?: string | null
          member_firm_name?: string | null
          region_name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          followers_count: number | null
          following_count: number | null
          full_name: string | null
          id: string
          instagram_id: string | null
          media_count: number | null
          updated_at: string
          user_id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          followers_count?: number | null
          following_count?: number | null
          full_name?: string | null
          id?: string
          instagram_id?: string | null
          media_count?: number | null
          updated_at?: string
          user_id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          followers_count?: number | null
          following_count?: number | null
          full_name?: string | null
          id?: string
          instagram_id?: string | null
          media_count?: number | null
          updated_at?: string
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      success_new_refs_rec: {
        Row: {
          countries: string | null
          enquries_to_country: number | null
          referrals_parcentage: string | null
          successful_referrals: string | null
        }
        Insert: {
          countries?: string | null
          enquries_to_country?: number | null
          referrals_parcentage?: string | null
          successful_referrals?: string | null
        }
        Update: {
          countries?: string | null
          enquries_to_country?: number | null
          referrals_parcentage?: string | null
          successful_referrals?: string | null
        }
        Relationships: []
      }
      success_new_refs_refs: {
        Row: {
          enquiries_from_country: number | null
          ref_code: string | null
          success_amount_in_gbp: number | null
        }
        Insert: {
          enquiries_from_country?: number | null
          ref_code?: string | null
          success_amount_in_gbp?: number | null
        }
        Update: {
          enquiries_from_country?: number | null
          ref_code?: string | null
          success_amount_in_gbp?: number | null
        }
        Relationships: []
      }
      turnover_refarrals_2023: {
        Row: {
          country_name: string | null
          turnover_total: string | null
          usd_referrals_in: string | null
          usd_referrals_out: string | null
          year: number | null
        }
        Insert: {
          country_name?: string | null
          turnover_total?: string | null
          usd_referrals_in?: string | null
          usd_referrals_out?: string | null
          year?: number | null
        }
        Update: {
          country_name?: string | null
          turnover_total?: string | null
          usd_referrals_in?: string | null
          usd_referrals_out?: string | null
          year?: number | null
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
