sequenceDiagram

<<<<<<< HEAD
participant browser

participant server
=======
    participant browser

    participant server
>>>>>>> 93169f7 (cleaner)

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

activate server

<<<<<<< HEAD
server-->> broswer: {"note":"fsdf","Date":"15-10-2024"}
=======
server-->>browser: 302 Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
>>>>>>> 93169f7 (cleaner)

deactivate server
