# open-municipality

## Getting Started

To take advantage of the web-app you need to:

1.  Get a copy of the code.
2.  Install the dependencies if you don't already have them.
3.  Modify the application to your liking.
4.  Deploy your production code.

### Get the code

Clone this repository on your local machine or download the
[latest release][latest_release].

### Install dependencies

We assume you have already [NodeJS][node_link] and
[npm][npm_link] installed on your machine.

With Node.js installed, run the following one liner from the root of your
open-municipality download:

```sh
npm install --g gulp-cli bower && npm install
```

### Prerequisites (for everyone)

The full webapp requires the following major dependencies:

1.  [NodeJS][node_link], used to run JavaScript tools from the command line.

2.  [npm][npm_link], the node package manager, installed with Node.js and used
to install Node.js packages.

3.  Gulp, a Node.js-based build tool.

4.  Bower, a Node.js-based package manager used to install front-end
packages (like Angular).

## Development workflow

### Serve / watch

```sh
npm start
```

This starts a web server on your local machine from where running the client
 application located inside the `client` folder.

Open a browser pointing to [localhost:3000][webserver_url] to render the
client web application.

## License

MIT © [Andrea Sonny](https://andreasonny.mit-license.org/@2016)

[latest_release]: https://github.com/resilientplc/jbilling-provisioning/releases/latest
[node_link]: https://nodejs.org/en/download/package-manager/
[npm_link]: https://docs.npmjs.com/getting-started/installing-node
[webserver_url]: http://localhost:3000/
