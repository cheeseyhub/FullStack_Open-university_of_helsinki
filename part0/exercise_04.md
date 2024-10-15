sequenceDiagram

    participant browser

    participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

activate server

server-->> broswer: {"note":"fsdf","Date":"15-10-2024"}

deactivate server
