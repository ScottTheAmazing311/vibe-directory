-- Create projects table
create table projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  url text not null,
  creator text not null,
  category text not null,
  description text not null,
  "screenshotUrl" text not null,
  "createdAt" timestamp with time zone default timezone('utc'::text, now()) not null,
  approved boolean default true
);

-- Enable Row Level Security
alter table projects enable row level security;

-- Create policy to allow anyone to read approved projects
create policy "Allow public read access to approved projects"
  on projects for select
  using (approved = true);

-- Create policy to allow anyone to insert projects
create policy "Allow public insert access"
  on projects for insert
  with check (true);

-- Create index for faster queries
create index projects_created_at_idx on projects ("createdAt" desc);
create index projects_approved_idx on projects (approved);
