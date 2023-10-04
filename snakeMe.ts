const _ = require("lodash");

interface SnakeMeRequest {
  text: string;
}

interface SnakeMeResponse {
  text_snake: string;
}

export default function snakeMe(body: SnakeMeRequest): SnakeMeResponse {
  const text_snake = _.snakeCase(body.text);

  return { text_snake };
}
