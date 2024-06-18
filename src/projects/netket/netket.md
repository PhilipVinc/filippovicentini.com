---
title: "NetKet: The Machine Learning toolbox for Quantum Physics"
image: logo.png
description: "Develop Software for Researchers."
featured: true
featuredTitle: NetKet
featuredImage: netket_white.jpg
featuredImageColor: "#252F3C"
order: 5
---

NetKet is a Python-based research software package to bridge the gap between Differentiable Programming, Quantum Physics and scalable numerical simulations. 

NetKet's primary purpose is to facilitate research in Neural-Network representation of quantum systems. It is primarily geared at researchers in the field, but it can also be used to easily setup simulations. Don't be fooled however: while NetKet might appear easy to use, Variational Monte Carlo is a tough technique that requires some expertise to master.

NetKet is an useful tool to onboard Master and PhD students in the research we do, without having to spend months writing a complicated code or having to understand every little detail of VMC immediately. In a sense, it smoothens the learning curve considerably, while allowing a lot of control of what happens behind the scenes in a Monte Carlo code.
Moreover, in NetKet we vendor several little utilities that simplify the implementation of (efficient) algorithms: for example, we expose a few primitives for doing automatic differentiation with complex numbers using a syntax more intuitive to physicists, tools to leverage Automatic Differentiation within stochastic integrals or other tools to efficiently parallelize such codes while keeping a low memory footprint.

If you are interested in learning how Variational Monte Carlo (in general) and NetKet (in particular) work, I usually reccomend to look into the [VMC from Scratch](https://netket.readthedocs.io/en/latest/tutorials/vmc-from-scratch.html) tutorial I wrote a while ago for a school in Trento.
In this notebook I guide you to write a simple VMC implementation, and provide several tests to ensure that your code works correctly.
I strongly suggest you don't look at the solutions at first (you can download a version without the solutions from [this link](https://github.com/PhilipVinc/Lectures/tree/main/2404_ICTP) and only look later at them!

In my [PhilipVinc/Lectures](https://github.com/PhilipVinc/Lectures) repository you can find several other lectures based on this notebook and others. Older ones might not run anymore because of changing requirements in the python ecosystem, while those I gave in the last 6-12 months are highly likely to work.
