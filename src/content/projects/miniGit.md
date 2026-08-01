---
title: "Mini Git - Version Control System"
index: "04"
summary: "A lightweight Git-like version control system built from scratch in C++ using core data structures and algorithms."
stack: ["C++", "DSA", "File Systems", "CMake"]
status: "completed"
date: 2025-11-16
featured: false
coordinates: "DSA/VERSION"
---

## Overview

Mini Git is a lightweight version control system implemented from scratch in C++ to explore the internal mechanics behind tools like Git. The project recreates core version control functionality including repositories, commits, staging, history tracking, restore operations, and persistent storage using custom data structures.

The system applies fundamental DSA concepts such as linked lists, stacks, hash tables, and recursion to manage commit history, enable undo/redo navigation, and provide efficient commit lookup.

I contributed to implementing repository functionality, integrating core components, and developing parts of the commit-based storage workflow.

## Highlights

* Built a Git-inspired version control system with custom commit management
* Implemented commit history tracking using linked list-based structures
* Developed undo/redo functionality using stack-based navigation
* Added hash table-based commit lookup for efficient retrieval
* Implemented persistent storage for repository state and commit snapshots
* Applied recursive file handling for directory traversal and version restoration
* Designed a modular C++ architecture separating repository, commit, storage, and utility components

## Technical Concepts

* Linked Lists — maintaining sequential commit history
* Stacks — implementing undo/redo navigation
* Hash Tables — fast commit ID lookup
* Hash Functions — generating unique commit identifiers
* Recursion — directory traversal and file operations
* File I/O — persistent repository and commit storage

## Stack

C++, Data Structures & Algorithms, Filesystem APIs, CMake

### Source Code
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/duaasiraj/Mini-Git-version-control-system)