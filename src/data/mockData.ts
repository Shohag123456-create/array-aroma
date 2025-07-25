export interface DataRecord {
  region_name: string;
  country: string;
  member_firm_name: string;
  firm_intranet_name: string;
  does_country_participate_in_groups_industry_specialty_leadership: number;
  does_country_participate_in_groups_industry_specialty: number;
  ata_speakers_build_programme_feedback: number;
  global_speakers_build_programme_feedback: number;
  sport_speakers_build_programme_feedback: number;
  regional_speakers_build_programme_feedback: number;
  engage_cambridge_programme_speakers_build_programme_feedback: number;
  does_firm_participate_in_learning_hlb_skills_hub: number;
  does_firm_participate_in_hlb_comunities_day_communities: number;
  does_firm_participate_in_hlb_comunities_pro_bono: number;
  does_firm_participate_in_intranet: number;
  does_firm_participate_with_affinity_tools: number;
  total: number;
  engagement_rate: string;
  groups: string;
  conference: string;
  tools: string;
  engagement_rate_1: string;
  groups_1: string;
  conferences: string;
  tools_1: string;
  depth_of_engament_engagement_rate_1_3: string;
  results: string;
}

export const mockData: DataRecord[] = [
  {
    "region_name": "Balkans",
    "country": "Albania",
    "member_firm_name": "TALIS",
    "firm_intranet_name": "HLB Albania",
    "does_country_participate_in_groups_industry_specialty_leadership": 0,
    "does_country_participate_in_groups_industry_specialty": 1,
    "ata_speakers_build_programme_feedback": 0,
    "global_speakers_build_programme_feedback": 0,
    "sport_speakers_build_programme_feedback": 0,
    "regional_speakers_build_programme_feedback": 0,
    "engage_cambridge_programme_speakers_build_programme_feedback": 0,
    "does_firm_participate_in_learning_hlb_skills_hub": 0,
    "does_firm_participate_in_hlb_comunities_day_communities": 0,
    "does_firm_participate_in_hlb_comunities_pro_bono": 0,
    "does_firm_participate_in_intranet": 1,
    "does_firm_participate_with_affinity_tools": 0,
    "total": 2,
    "engagement_rate": "23.10%",
    "groups": "4.77%",
    "conference": "7.15%",
    "tools": "7.70%",
    "engagement_rate_1": "#REF!",
    "groups_1": "16.50%",
    "conferences": "0.00%",
    "tools_1": "6.60%",
    "depth_of_engament_engagement_rate_1_3": "5.50%",
    "results": "37.54%"
  },
  // Generate more sample data
  ...Array.from({ length: 25 }, (_, i) => ({
    "region_name": ["Europe", "Asia Pacific", "Americas", "Africa", "Middle East"][i % 5],
    "country": ["Germany", "Australia", "Brazil", "South Africa", "UAE", "France", "Japan", "Canada", "Nigeria", "Saudi Arabia"][i % 10],
    "member_firm_name": `Firm ${i + 2}`,
    "firm_intranet_name": `HLB ${["Germany", "Australia", "Brazil", "South Africa", "UAE", "France", "Japan", "Canada", "Nigeria", "Saudi Arabia"][i % 10]}`,
    "does_country_participate_in_groups_industry_specialty_leadership": Math.random() > 0.5 ? 1 : 0,
    "does_country_participate_in_groups_industry_specialty": Math.random() > 0.3 ? 1 : 0,
    "ata_speakers_build_programme_feedback": Math.random() > 0.7 ? 1 : 0,
    "global_speakers_build_programme_feedback": Math.random() > 0.6 ? 1 : 0,
    "sport_speakers_build_programme_feedback": Math.random() > 0.8 ? 1 : 0,
    "regional_speakers_build_programme_feedback": Math.random() > 0.5 ? 1 : 0,
    "engage_cambridge_programme_speakers_build_programme_feedback": Math.random() > 0.7 ? 1 : 0,
    "does_firm_participate_in_learning_hlb_skills_hub": Math.random() > 0.4 ? 1 : 0,
    "does_firm_participate_in_hlb_comunities_day_communities": Math.random() > 0.6 ? 1 : 0,
    "does_firm_participate_in_hlb_comunities_pro_bono": Math.random() > 0.7 ? 1 : 0,
    "does_firm_participate_in_intranet": Math.random() > 0.2 ? 1 : 0,
    "does_firm_participate_with_affinity_tools": Math.random() > 0.6 ? 1 : 0,
    "total": Math.floor(Math.random() * 10) + 1,
    "engagement_rate": `${(Math.random() * 100).toFixed(2)}%`,
    "groups": `${(Math.random() * 20).toFixed(2)}%`,
    "conference": `${(Math.random() * 15).toFixed(2)}%`,
    "tools": `${(Math.random() * 25).toFixed(2)}%`,
    "engagement_rate_1": Math.random() > 0.8 ? "#REF!" : `${(Math.random() * 50).toFixed(2)}%`,
    "groups_1": `${(Math.random() * 30).toFixed(2)}%`,
    "conferences": `${(Math.random() * 10).toFixed(2)}%`,
    "tools_1": `${(Math.random() * 20).toFixed(2)}%`,
    "depth_of_engament_engagement_rate_1_3": `${(Math.random() * 15).toFixed(2)}%`,
    "results": `${(Math.random() * 80).toFixed(2)}%`
  }))
];