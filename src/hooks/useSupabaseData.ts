import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
}

export interface UseSupabaseDataResult {
  data: any[];
  loading: boolean;
  error: string | null;
  pagination: PaginationInfo;
  goToPage: (page: number) => void;
  refresh: () => void;
}

export const useSupabaseData = (
  tableName: string,
  pageSize: number = 50
): UseSupabaseDataResult => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (page: number) => {
    if (!tableName) return;
    
    setLoading(true);
    setError(null);

    try {
      // Get total count
      const { count } = await supabase
        .from(tableName as any)
        .select('*', { count: 'exact', head: true });

      // Get paginated data
      const { data: tableData, error: fetchError } = await supabase
        .from(tableName as any)
        .select('*')
        .range((page - 1) * pageSize, page * pageSize - 1);

      if (fetchError) throw fetchError;

      setData(tableData || []);
      setTotalCount(count || 0);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, [tableName, pageSize]);

  const goToPage = (page: number) => {
    fetchData(page);
  };

  const refresh = () => {
    fetchData(currentPage);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return {
    data,
    loading,
    error,
    pagination: {
      currentPage,
      totalPages,
      totalCount,
      pageSize,
    },
    goToPage,
    refresh,
  };
};