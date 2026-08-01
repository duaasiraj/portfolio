---
title: "Nanograd"
index: "01"
summary: "Automatic differentiation engine from scratch."
stack: ["Python", "NumPy"]
status: "active"
date: 2026-03-01
featured: true
coordinates: "GRAD/ENGINE"
---

## Overview

Nanograd is a lightweight automatic differentiation engine and neural network library built entirely from scratch using only NumPy. The project recreates the core components of a modern deep learning framework—including dynamic computation graphs, reverse-mode automatic differentiation, neural network modules, loss functions, optimizers, and training loops—to better understand how frameworks like PyTorch work under the hood.

The engine supports tensor operations with automatic gradient computation, enabling end-to-end training of neural networks without relying on existing autograd libraries. To validate the implementation, the library was used to train a multilayer perceptron on the MNIST handwritten digit dataset, achieving over 95% test accuracy. It also includes computation graph visualization and numerical gradient checking utilities for debugging and verifying correctness.


## Highlights

- Built a dynamic computation graph with reverse-mode automatic differentiation from scratch
- Implemented tensor operations including broadcasting, matrix multiplication, reductions, reshaping, and nonlinear activations
- Designed a PyTorch-inspired neural network API with `Module`, `Sequential`, `Linear`, activation layers, and parameter management
- Implemented CrossEntropy and MSE losses along with SGD optimization
- Added Graphviz-based computation graph visualization for inspecting forward and backward passes
- Verified gradients using numerical gradient checking and comprehensive unit tests
- Trained a fully connected neural network on MNIST to over 95% test accuracy


![Computation Graph](/portfolio/assets/computationgraph.svg)


## Stack

Python, NumPy, Graphviz, PyTest


## Key Learnings

Building Nanograd deepened my understanding of reverse-mode automatic differentiation, gradient propagation through computation graphs, tensor broadcasting, numerical stability, neural network optimization, and the internal design of modern deep learning frameworks such as PyTorch.

### Source Code
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/duaasiraj/nanograd-lite)