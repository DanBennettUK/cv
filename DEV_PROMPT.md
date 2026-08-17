You are a developer fixing a CV website at /opt/data/work-cv on branch feat/modern-rebuild. The site is Astro 5. Fix these issues and DO NOT get stuck:

1. LEFT SPACING: The page-layout grid uses 340px sidebar which wastes left space. Change sidebar to 280px max-width and give the main content more room.

2. SEPARATOR ANIMATIONS: There is a shimmer keyframe animation around line 754 of src/styles/global.css that makes separators look like they have a marquee effect. Remove the shimmer animation completely. Also remove the fadeInUp animation on experience items - keep them static.

3. EDUCATION: Open src/components/Education.astro and remove ALL education entries. Keep only an empty placeholder. Do NOT invent any university names.

4. PROJECTS: Fetch the DanBennettUK repos from GitHub API and pick 3-5 public repos that are real personal projects - not forks, not templates, not trivial. Add them to src/components/Projects.astro with name, link, and a short description.

After ALL fixes run npm run build then git add -A and git commit and git push origin feat/modern-rebuild