# HTTP Server Built With Bun and Docker

This is a simple HTTP server built using bun and containerised with Docker.

There is a single endpoint for `POST` requests which transforms a string into snake case 🐍:

Request:

```
{
    "text" : "example text here"
}
```

Response:

```
{
    "text_snake": "example_text_here"
}
```
