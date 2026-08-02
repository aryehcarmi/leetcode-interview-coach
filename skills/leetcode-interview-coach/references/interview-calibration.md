# Interview calibration

Checked 2026-07-25. Treat interview formats and AI-use policies as changeable; the candidate should confirm the exact loop with the recruiter.

## Google AI Career Catalyst

The July 2026 Google Careers posting describes a full-time Software Engineer II role in Google AI and Infrastructure, not a short training course. It includes one month of onboarding, rotations through three high-impact projects, 13 months of onboarding and rotations in total, management support and project-specific feedback, then direct placement on a long-term team after successful completion.

Explicit application signals:

- Data structures and algorithms experience.
- Software development in at least one general-purpose language.
- AI/ML and infrastructure exposure.
- Learning agility and demonstrated problem solving.
- Readiness to deliver quickly, navigate ambiguous systems, develop technical depth, and work across organizations.

Coaching inference: emphasize correct DSA reasoning, language fluency, debugging, rapid adaptation to follow-ups, and explanations that connect local algorithm choices to scale, reliability, or infrastructure. Do not claim a Catalyst-specific interview format; the posting does not publish one.

## Current cross-company bar

- Google Catalyst: DSA, a programming language, AI/ML plus infrastructure exposure, learning agility, problem solving, ambiguity, and technical ownership.
- Google interviews: make the thought process visible, expect follow-ups, clarify assumptions, and collaborate. The public default prohibits Search and AI unless the candidate receives different instructions.
- Meta: communication, problem solving, implementation, verification, approach comparison, data-structure choice, complexity, organized code, edge cases, and tracing all contribute to the coding signal.
- Microsoft: clarify ambiguities, plan first, write clean and executable code, test boundaries and error cases, explain Big-O, and compare data structures.
- Amazon: apply CS fundamentals rather than memorize them; write syntactically correct, scalable, robust, well-tested code; check edge cases; then refine complexity.
- OpenAI: pair coding, take-homes, or technical tests vary by team; engineering evaluation emphasizes design, code quality, performance, test coverage, communication, collaboration, and visible problem solving.
- Anthropic: technical interviews use live coding environments and assess reasoning, tradeoffs, implementation, running, and debugging. Basic syntax and standard-library fluency still matter even when ordinary documentation lookup is allowed.
- Databricks: expect production-quality organization, comprehensive tests, edge handling, DSA, Big-O, data-structure choices, and clear design reasoning, plus role-specific systems or domain rounds.
- Jane Street: write real code in the strongest language; collaborate on open-ended problems; communicate clearly; avoid relying on one clever insight or “algorithm bingo.”
- HRT: expect coding, debugging, design, and team-fit work. Deep fundamentals, listening, direct implementation, and low-level/runtime understanding matter more than obscure tricks.
- Citadel/Citadel Securities early career: explain strategy, clarify, discuss tradeoffs, use hints productively, and demonstrate programming plus DSA in timed coding.
- Two Sigma: prepare DSA, Big-O, testing, design, memory/performance, and language fluency; some roles also probe concurrency and system design.
- Optiver: know the language and standard library under the hood, complexity, architecture, networking, concurrency, memory, latency, and how a design changes under new constraints.

## Coaching rules distilled

1. Train a repeatable loop: clarify → example → invariant/plan → implement → test → complexity → tradeoff.
2. Prefer executable code and deliberate tests over pseudocode or a memorized pattern label.
3. Use `follow-up` to vary constraints, expose an adversarial case, request a proof, or connect a data structure to runtime behavior.
4. Treat LeetCode as fundamentals practice, not a complete simulation of open-ended, debugging, systems, or code-review rounds.
5. Train without AI dependence. Anthropic prohibits live AI help unless explicitly allowed; HRT calls undisclosed LLM use cheating; Two Sigma prohibits AI during assessments.
6. Recognize authorized AI formats as a separate skill: Meta and Amazon have published AI-assisted assessment formats, and Google confirmed a limited 2026 Gemini code-comprehension pilot. In those formats, test decomposition, output validation, debugging, and the ability to explain or reject AI suggestions. Never infer permission from industry trends.
7. If the user says an employer assessment or live interview is underway, provide real-time help only when the employer explicitly permits it.

## Sources

- Google Careers, “Software Engineer II, Early Career, Google Cloud AI Career Catalyst Program,” crawled July 2026: https://www.google.com/about/careers/applications/jobs/results/138156162599002822-software-engineer-ii-early-career-google-cloud-ai-career-catalyst-program
- Google Careers, “Interviewing at Google”: https://www.google.com/about/careers/applications/interview-tips
- Business Insider, Google recruiting VP-confirmed Gemini interview pilot, 2026-05-07: https://www.businessinsider.com/google-job-interview-software-engineers-ai-assistant-coding-2026-5
- Meta, “Software Engineering Full Loop Interview Guide”: https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Meta_SWE_tech_screen_guide.pdf
- Meta Careers, authorized AI interview pilot announcement, 2025-10-20: https://www.linkedin.com/posts/meta_metacareers-interviewing-softwareengineering-activity-7386046074240737280-wnwA
- Microsoft Careers, “Technical interviewing”: https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing.html
- Amazon Jobs, “Software development interview topics” and “SDE II Interview Prep”: https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics and https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep
- Amazon, “How AI is changing resumes, job searches, and hiring,” 2026-01-22: https://www.aboutamazon.com/news/workplace/artificial-intelligence-resume-jobs-hiring-amazon
- OpenAI, “Interview guide”: https://openai.com/interview-guide/
- Anthropic, “Careers” and “Guidance on Candidates’ AI Usage”: https://www.anthropic.com/careers and https://www.anthropic.com/candidate-ai-guidance
- Databricks, “Engineering interview preparation,” April 2025: https://www.databricks.com/sites/default/files/2025-04/engineering-careers-site-interview-prep-april-2025-002.pdf
- Jane Street, “Preparing for a Software Engineering Interview”: https://www.janestreet.com/preparing-for-a-software-engineering-interview/
- Hudson River Trading, “Engineering and Interviewing at HRT,” 2025-10-02: https://www.hudsonrivertrading.com/hrtbeat/engineering-and-interviewing-at-hrt/
- Citadel Securities, “Internship and New Graduates: Engineering Interview Process”: https://www.citadelsecurities.com/careers/career-perspectives/internship-and-new-graduates-engineering-interview-process/
- Two Sigma, “Interviewing for Software Engineering”: https://www.twosigma.com/careers/interviewing-at-two-sigma/interviewing-for-software-engineering/
- Optiver, “Interview tips for Software Engineers,” 2025-03-21: https://www.optiver.com/join-us/stories/optiver-interview-tips-for-software-engineers/
