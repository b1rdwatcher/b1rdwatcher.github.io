import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SITE_CONFIG = {
  marqueeContent: '【公告内容待填写】   【公告内容待填写】   【公告内容待填写】',

  // 这里填顶部左侧的小图
  topIpImage: '',

  // 这里填左右两边站着的小人图
  leftFigureImage: '',
  rightFigureImage: '',

  // 板块2：7张随机图
  block2Images: ['', '', '', '', '', '', ''],

  // 板块3：7张随机图
  block3Images: ['', '', '', '', '', '', '']
};

// 这里填你自己的 Supabase 信息
export const SUPABASE_URL = '请在这里填写你的 Supabase URL';
export const SUPABASE_ANON_KEY = '请在这里填写你的 Supabase anon key';

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

export const SUPABASE_SQL = `
create table if not exists public.site_stats (
  id bigint primary key,
  flower_count integer not null default 0,
  updated_at timestamptz not null default now()
);

insert into public.site_stats (id, flower_count)
values (1, 0)
on conflict (id) do nothing;

create table if not exists public.messages (
  id bigint generated always as identity primary key,
  name text not null,
  avatar text,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.site_stats enable row level security;
alter table public.messages enable row level security;

drop policy if exists "site_stats_read" on public.site_stats;
create policy "site_stats_read"
on public.site_stats
for select
to anon
using (true);

drop policy if exists "site_stats_update" on public.site_stats;
create policy "site_stats_update"
on public.site_stats
for update
to anon
using (id = 1)
with check (id = 1);

drop policy if exists "messages_read" on public.messages;
create policy "messages_read"
on public.messages
for select
to anon
using (true);

drop policy if exists "messages_insert" on public.messages;
create policy "messages_insert"
on public.messages
for insert
to anon
with check (char_length(name) between 1 and 24 and char_length(content) between 1 and 200);

alter publication supabase_realtime add table public.messages;
alter publication supabase_realtime add table public.site_stats;
`;
