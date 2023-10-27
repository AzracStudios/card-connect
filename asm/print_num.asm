section .data
    num db 0, 10
    
section .text
    global _start

_start:
    
    call _printNum

    mov rax, 60
    mov rdi, 0
    syscall

_printNum:
    mov rax, 48     ; 48 => ascii for 0
    add rax, 7      ; number added to rax is printed
    mov [num], al

    mov rax, 1
    mov rdi, 1
    mov rsi, num
    mov rdx, 2
    syscall
    ret