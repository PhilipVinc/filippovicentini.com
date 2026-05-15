---
title: Teaching
permalink: /computational-physics/
layout: hiring
eleventyNavigation:
  parent: teaching
  key: comp-phys
  order: 1
---


## PHY_52006_EP Computational and Machine Learning methods for Quantum Physics

- [Lecture notes 2025/2026 (WIP)](../assets/documents/Lecture-notes-CompPhys.pdf)
- [Tutorial notebooks](https://github.com/PhilipVinc/ComputationalQuantumPhysics)

This is a course for the computational physics track at the 3rd year of Ecole Polytechnique/Master 1 level university.
The course assumes familiarity with the basics of quantum systems with N≥2 particles and simmetries in quantum mechanics. 
It also assumes basic concepts from statistical physics (what is a phase transition, ideally the concept of a critical exponent, ) but a few reminders are given throughout the course.

I designed the course with multiple goals. 
- The most important, for me, is for students to become fluent into the challenges that arise when attempting to tackle problems in (many-body) quantum mechanics and chemistry using computational tools, and into the approaches and ideas that can be developed to solve those.
A key point I value is interdisciplinarity: techniques discussed here, while presented in their formulation used to tackle problems in quantum mechanics, can also be targeted at different problems like computational fluid dynamics, partial differential equations, or more generally data analysis. 
I will highlight and stress repeatedly that connection.

- I will consider it a _reussite_ if students, at the end of this course, will be fluently able to jump from mathematical notation, to pseudocode notation, to computercode. In other words, if a student is given the key equations of an algorithm, if he is capable of translating it into pseudocode and code, and vice-versa if given a few lines of code they are able to translate it to a mathematical equation. This is a key skill that is otherwise neglected in traditional physics classes.

- From a knowledge point of view, students will learn about (i) Exact Diagonalization (Lanczos algorithm), which is the brute-force way to attack all small-scale problems without worrying about numerical details, (ii) How simmetries can be used to _lower_ the computational complexity, (iii) [Tensor Network methods](https://www.youtube.com/shorts/fb1VY74inlA) (Matrix Product States) and their connection to Entanglement (including area/volume law states, the area law conjecture, etc) and in particular the (iv) DMRG algorithm to find the ground-state of a many body system as well as the TDVP algorithm to simulate the Schroedinger's equation of a large scale system. 
Then, we will discuss (v) Variational methods, in particular in their modern Neural network Quantum States (NQS) formulation, and its connction to optimization problems in machine learning, including the (vi) natural gradient descent and t-VMC algorithm. The course will finish with 3 lectures on quantum chemistry, starting from the (vii) mapping of the electronic hamiltonian into the second-quantised molecular hamiltonian, and its solution with exact methods (Full Configuration Interaction) and the Hartree Fock self-consistent approach. We will then discuss (viii-ix) [Molecular dynamics](https://www.youtube.com/watch?v=5JcFgj2gHx8) and how this algorithm has a too high computational cost by itself, and how to use Machine Learning to _learn_ the [interaction potential between different atoms](https://www.youtube.com/watch?v=xsCclme6RmY) to predict the classical motion of molecules and speed up simulations with a technique called _surrogate modelling_.

The course is separated into 9 sessions of 1h30 classes + 3h30 practicals, where students go through some notebookd implementing and experimenting with the algortihms discussed during the class.

