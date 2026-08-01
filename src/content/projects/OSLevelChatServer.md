---
title: "OS-Level Chat Server"
index: "03"
summary: "Concurrent TCP chat server built from scratch in C using sockets, pthreads, and custom data structures."
stack: ["C", "Systems Programming", "Networking", "Pthreads"]
status: "completed"
date: 2026-04-20
featured: true
coordinates: "SYSTEMS/NETWORK"
---

## Overview

OS-Level Chat Server is a multi-client TCP chat system built from scratch in C using low-level operating system primitives. The project implements a custom server architecture capable of handling concurrent users through socket communication, thread management, and synchronization mechanisms.

I was responsible for designing the overall server architecture, implementing the server-side communication flow, and developing the thread-safe linked list based client registry used to manage connected users. The project focuses on understanding the fundamentals behind real-world networked applications without relying on external frameworks.

## Highlights

* Designed and implemented the complete server architecture and client communication lifecycle
* Built a TCP socket-based communication system using POSIX socket APIs
* Developed a custom thread pool for efficient concurrent client handling
* Implemented a thread-safe linked list registry for managing active clients and user states
* Applied mutexes and synchronization primitives to prevent race conditions during concurrent operations
* Implemented message broadcasting, private messaging, and command-based interactions
* Structured the system into modular components including networking, logging, client management, and concurrency layers

## Stack

C, POSIX Threads (pthreads), TCP/IP Sockets, Linux System APIs, Makefile

### Source Code
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/duaasiraj/OS-level-chat-server)