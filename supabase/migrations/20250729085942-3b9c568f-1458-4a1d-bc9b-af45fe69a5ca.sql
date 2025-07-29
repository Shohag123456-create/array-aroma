-- Enable public read access for all data visualization tables
-- These tables contain business/analytics data that should be publicly readable

-- Policies for all_engagement_jcm table
CREATE POLICY "Enable read access for all users" ON "public"."all_engagement_jcm"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for conf_feedbacks table  
CREATE POLICY "Enable read access for all users" ON "public"."conf_feedbacks"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for conferences table
CREATE POLICY "Enable read access for all users" ON "public"."conferences"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for hlb-firms table
CREATE POLICY "Enable read access for all users" ON "public"."hlb-firms"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for impact_matrix table
CREATE POLICY "Enable read access for all users" ON "public"."impact_matrix"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for success_new_refs_rec table
CREATE POLICY "Enable read access for all users" ON "public"."success_new_refs_rec"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for success_new_refs_refs table
CREATE POLICY "Enable read access for all users" ON "public"."success_new_refs_refs"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for turnover_refarrals_2023 table
CREATE POLICY "Enable read access for all users" ON "public"."turnover_refarrals_2023"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for group_membership_by_firm table
CREATE POLICY "Enable read access for all users" ON "public"."group_membership_by_firm"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

-- Policies for cars_year_make_model_master_advanced table
CREATE POLICY "Enable read access for all users" ON "public"."cars_year_make_model_master_advanced"
AS PERMISSIVE FOR SELECT
TO public
USING (true);