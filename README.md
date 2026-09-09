<div align="center">

# 🧪 CourseLab

### The First Interactive AI Notebook with Preloaded Official Curricula & Connected Classrooms

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?logo=discord&logoColor=white)](https://discord.gg/tu-enlace-de-discord)
[![Status: Waitlist](https://img.shields.io/badge/Status-Beta%20Waitlist%20Active-1D72FE)](https://courselab.vercel.app)
[![Tech: Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![AI: NVIDIA NIM](https://img.shields.io/badge/AI-NVIDIA%20API-76B900?logo=nvidia&logoColor=white)](https://build.nvidia.com)

<p align="center">
  <a href="#about">About</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#community">Community</a>
</p>

</div>

---

## 📖 About CourseLab

Studying for advanced high school examinations (such as **Advanced Placement® (AP)** and **IB Diploma**) is currently fragmented across multiple disconnected apps: messy Google Docs, dense 200-page College Board PDFs, isolated flashcard decks in Quizlet, and scattered presentation slides.

**CourseLab** solves this by unifying your study workflow into a single, distraction-free environment:
* **Preloaded Official Frameworks:** Start immediately with officially mapped units, key concepts, and vocabulary. No blank pages.
* **Grounded AI ("Tutor Me"):** Real-time AI explanations with page citations directly linked to official curriculum standards, eliminating hallucinations.
* **Live Connected Classrooms:** Teachers push notes, assign reading units, and generate anti-cheating exams (Versions A/B/C) with automatic answer keys.

---

## ⚡ Key Features

* 📚 **20 Launch AP Courses:** Full unit-by-unit structure for *AP Human Geography, AP Biology, AP Chemistry, AP Calculus AB/BC, AP US History, AP World History*, and more.
* 🔍 **"What did you study today?" Hub:** A clean, Google Classroom-inspired dashboard to quickly search across all your course units and verified sources.
* 🎙️ **Audio Overviews:** 5-to-10 minute AI-generated podcast summaries of every unit, enabling audio study on the go.
* 📝 **Anti-Cheating Assessment Engine:** Generates multiple shuffled variants of quizzes with answer keys for educators, and self-scoring practice modes for students.
* 📊 **Interactive Concept Graphs:** Transform demographic, historical, and scientific data into visual, filterable diagrams.
* 🔌 **1-Click Connectors:** Seamless integration with Google Classroom, Google Drive, Canvas LMS, and NotebookLM sources.

---

## 🛠️ Tech Stack

* **Frontend:** Next.js / HTML5, Tailwind CSS, TypeScript
* **Database & Auth:** [Supabase](https://supabase.com/) (PostgreSQL with Row-Level Security, Supabase Auth & Storage)
* **AI & High-Speed Inference:** [NVIDIA NIM](https://build.nvidia.com/) & ultra-low latency inference engines (Llama / Nemotron models)
* **Source Grounding:** NotebookLM-inspired RAG architecture for zero-hallucination citations
* **Document Engine:** Dynamic HTML-to-PDF and PowerPoint (.pptx) conversion

---

## 🚀 Quickstart & Local Setup

```bash
# 1. Clone the repository
git clone [https://github.com/your-username/courselab.git](https://github.com/your-username/courselab.git)
cd courselab

# 2. Install dependencies
npm install

# 3. Set up environment variables (.env.local)
cp .env.example .env.local
# Add your Supabase URL, Anon Key, and NVIDIA API credentials

# 4. Run the development server
npm run dev

Open http://localhost:3000 with your browser to view the application.

🗺️ Project Roadmap
[x] Phase 1 (Current): Landing page launch & Waitlist intake qualification.

[ ] Phase 2: Core MVP development (Supabase database setup, NVIDIA API integration, 20 AP course ingestion).

[ ] Phase 3: Closed private beta rollouts with our Discord community cohort.

[ ] Phase 4: Public launch, student & educator subscription activation, and Custom Course Creator release.

💬 Join the Community
Have questions, want to request an AP subject, or want early beta access?

Join our official Discord: Join CourseLab Discord

Submit your waitlist application: CourseLab Waitlist

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

Disclaimer: Advanced Placement® and AP® are trademarks registered by the College Board, which is not affiliated with, and does not endorse, this project.


---

### Siguientes pasos:
1. Crea tu repositorio en GitHub como **Público**.
2. Añade la descripción y las etiquetas en el apartado *About*.
3. Crea los dos archivos (`LICENSE` y `README.md`) pegando estos textos.
4. Recuerda reemplazar `[https://discord.gg/tu-enlace-de-discord](https://discord.gg/tu-enlace-de-discord)` con el enlace permanente que creaste en tu servidor de Discord.