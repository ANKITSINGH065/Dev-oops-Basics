The terms "bitcode," "machine code," and "compiled code" refer to different stages and representations of code within the software development process:

1. **Source Code**: This is the code written by a programmer in a high-level programming language like C, C++, Python, or Java.

2. **Compiled Code**: Compiled code refers to the result of translating the high-level source code into machine code, which is specific to the target processor architecture. Compilation is the process where a compiler takes the source code and translates it into machine code or an intermediate representation.

3. **Machine Code**: Machine code, also known as binary code, is a set of instructions that can be directly executed by a computer's CPU (Central Processing Unit). It consists of binary digits (bits) that represent the instructions understood by the processor.

4. **Bitcode**: Bitcode is an intermediate representation used by LLVM (Low Level Virtual Machine) compilers. LLVM is a compiler infrastructure project that provides tools for building compilers for various programming languages. Bitcode is an LLVM-specific representation of code that is generated during the compilation process. It's a form of intermediate representation that can be further optimized and translated into machine code or other formats.

**Differences**:

- **Compiled Code vs. Machine Code**: Compiled code is the result of compiling the source code, which may not necessarily be machine code. It could be an intermediate representation like LLVM bitcode. Machine code, on the other hand, is the actual binary code that the CPU understands and executes.

- **Bitcode vs. Compiled Code**: Bitcode is an intermediate representation that can be further optimized and translated into machine code or other formats. Compiled code, in the context of traditional compilation, refers to the final output of the compilation process, which could be machine code or another form of binary representation specific to the target platform.

In summary, while all three terms are related to the process of converting source code into a form that can be executed by a computer, they represent different stages or representations of the code within the compilation process.