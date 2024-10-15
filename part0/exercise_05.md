sequenceDiagram

participant browser

participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
<<<<<<< HEAD
    
    activate server
    
    server-->>browser: 200 OK HTML document
    
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    
    activate server
    
    server-->>browser: 200 OK the css file
    
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    
    activate server
    
    server-->>browser: 200 OK  the JavaScript file
    
=======

    activate server

    server-->>browser: 200 OK HTML document

    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css

    activate server

    server-->>browser: 200 OK the css file

    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js

    activate server

    server-->>browser: 200 OK  the JavaScript file

>>>>>>> bd3cdca (cleaner)
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
<<<<<<< HEAD
    
    activate server
    
    server-->>browser: 200 OK [{"content": "hellooo","date": "2024-10-14T18:06:01.556Z"}, ... ]
    
=======

    activate server

    server-->>browser: 200 OK [{"content": "hellooo","date": "2024-10-14T18:06:01.556Z"}, ... ]

>>>>>>> bd3cdca (cleaner)
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
