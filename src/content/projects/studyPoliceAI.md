---

title: "StudyPolice AI"
index: "02"
summary: "AI-powered study enforcement platform with intelligent scheduling and coaching."
stack: ["FastAPI", "React", "LLMs", "Algorithms"]
status: "active"
date: 2026-05-15
featured: true
coordinates: "SCHEDULE/OPTIMIZE"
--------------------------------

## Overview

StudyPolice AI is an AI-powered study accountability platform that generates personalized study plans from a student's GPA, coursework, deadlines, availability, and academic goals. The backend combines Constraint Satisfaction (CSP) and A* search to produce feasible schedules while a Groq-hosted LLM acts as an adaptive study coach, providing motivation, feedback, and reminders to keep students on track.

I designed and implemented the entire backend using FastAPI and Python, including the scheduling algorithms, API architecture, and JSON-based data pipeline that powers communication between the frontend and the optimization engine.

## Highlights

* Designed and implemented the complete FastAPI backend and REST API
* Built a CSP + A* scheduling engine for conflict-free, deadline-aware study plans
* Integrated Groq LLMs for personalized coaching, feedback, and accountability
* Developed JSON-based data models for tasks, calendars, schedules, and progress tracking
* Optimized schedule generation based on GPA targets, deadlines, available study hours, and course priorities
* Exposed a modular backend architecture for seamless integration with the React + Vite frontend

## Stack

Python, FastAPI, React, Vite, Groq API, JSON, Constraint Satisfaction (CSP), A* Search

### Source Code
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/duaasiraj/StudyPoliceAI)