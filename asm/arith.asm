section .text
   global _start

_start:
  mov rax, 8
  mov rbx, 9
  mul rbx

  add rax, 7
  mov rdi, rax
  mov rax, 60
  syscall
