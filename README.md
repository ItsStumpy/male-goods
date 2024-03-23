# male-goods
A small subset of a webmail system like Gmail and Outlook

## The Scope 🔭
- This project is broken into 2 parts
  - Server: will act as a proxy and will be what communicates with a mail server somewhere 🤔
  - Client: will talk to our server to do its work 🗣️
- The "male-goods" server:
  - will communicate with an email server whose details will be stored in a text file on the project's server (single-user system). Communication will be done through IMAP for retrieval and SMTP for sending.
  - will provide an API to the client allowing it to get a list of mailboxes for the account, a list of messages for a selected mailbox, and message details for client display.
  - yes, CRUD operations will exist so you can send those spicy messages and delete them soon after 🌶️
  - last but not least, server will provide storage of contacts and the associated ```add``` and ```delete``` functions for maintenance.
- The "male-goods" client:
  - It's the client... it displays stuff and allows for interactions
  - Need I say more?