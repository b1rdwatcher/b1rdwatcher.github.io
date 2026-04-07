import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SITE_CONFIG = {
  marqueeContent: '★ 欢迎来到本站 ★',
  topIpImage: '',
  leftFigureImage: './pic/left.png',
  rightFigureImage: './pic/right.png',
  block2Images: ['./pic/1.jpg', './pic/2.jpg', './pic/3.jpg'],
  block3Images: ['./pic/1.jpg', './pic/2.jpg', './pic/3.jpg']
};

export const SUPABASE_URL = 'https://nhgfnwdlqgtuhumgpvfo.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_LvuAMG5Z_wkmgyE8m7hmHA_q4-4ai4S';

export function hasSupabaseConfig() {
  return (
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes('请在这里填写') &&
    !SUPABASE_ANON_KEY.includes('请在这里填写')
  );
}

export function createSupabaseClient() {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
