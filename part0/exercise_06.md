<<<<<<< HEAD
sequenceDiagram

participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

activate server

server-->>browser: 201 Created {"content":"new_note", "date":"15-10-2024"}

deactivate server
=======
sequenceDiagram

participant browser

participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

activate server

server-->>browser: 201 Created {"content":"new_note", "date":"15-10-2024"}

deactivate server
>>>>>>> 93169f7 (cleaner)
