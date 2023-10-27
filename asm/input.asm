section .data
  prompt db "What is your name? "
  res db "Hello, "

section .bss
  name resb 16

section .text
  global _start

_start:
  call _prompt
  call _getInput
  call _result

  mov rax, 60
  mov rdi, 0
  syscall

_prompt:
  mov rax, 1
  mov rdi, 1
  mov rsi, prompt
  mov rdx, 19
  syscall
  ret

_getInput:
  mov rax, 0
  mov rdi, 0
  mov rsi, name
  mov rdx, 16
  syscall
  ret

_result:
  mov rax, 1
  mov rdi, 1
  mov rsi, res
  mov rdx, 7
  syscall

  mov rax, 1
  mov rdi, 1
  mov rsi, name
  mov rdx, 16
  syscall
  ret
