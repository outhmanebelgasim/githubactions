# CI/CD Intro

A Node.js/Express project for practising automated tests and continuous delivery,
with Packer and Terraform examples for staging and production environments.

Maintained by [outhmanebelgasim](https://github.com/outhmanebelgasim).

## Project structure

```sh
# You can generate this tree with:
# $ tree -a -I '.git|assets|.github|venv|node_modules|images|.DS_Store|*.tfvars|.terraform'
.
├── .gitignore
├── CODEOWNERS
├── LICENSE
├── README.md
├── infra
│   ├── README.md
│   └── instances
│       ├── production
│       │   ├── .terraform.lock.hcl
│       │   ├── main.tf
│       │   └── terraform.auto.tfvars.example
│       └── staging
│           ├── .terraform.lock.hcl
│           ├── create_staging_resource.sh
│           ├── extra_staging.tf.example
│           ├── main.tf
│           └── terraform.tfvars.auto.example
└── web
    ├── README.md
    ├── app.js
    ├── bin
    │   └── www
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    ├── tests
    │   ├── app.test.js
    │   └── routes.test.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade

12 directories, 26 files
```

- `infra/images`: contains [Packer](https://learn.hashicorp.com/packer) template to build our [AWS EC2 AMI](https://aws.amazon.com/ec2/)
- `infra/instances`: contains our [Terraform](https://learn.hashicorp.com/terraform) templates to setup our `staging` and `production` EC2 instances
- `web`: contains our simple [Express](https://expressjs.com/) web application

## Setup

### Run locally

With Node.js 16 or newer:

```sh
cd web
npm ci
npm test -- --runInBand
npm start
```

Open `http://localhost:3000`. Use `PORT` to change the listening port.

### Existing endpoints

| Method | Path | Status | Response |
| --- | --- | --- | --- |
| GET | `/` | 200 | Project home page |
| GET | `/ice-flakes` | 201 | `{"resource":"ice-flakes","count":1005,"shape":"rectangle"}` |
| GET | `/users/users` | 200 | `respond with a resource` |

Unknown paths return a 404 error page. The users URL includes both the router's
mount path and its existing route path.

### Publish your copy

Create an empty `ci-cd-intro` repository under your GitHub account. From the
project root, point the local remote at your repository before pushing:

```sh
git remote set-url origin https://github.com/outhmanebelgasim/ci-cd-intro.git
git remote -v
```

If your GitHub username or repository name differs, update this URL, `CODEOWNERS`,
and the project metadata in `web/package.json`. Commit your changes and push to
your repository.

Configure your repository's CI/CD workflows under `.github/workflows/`. Run the
application's installation and test commands from the `web/` directory.
See [the infrastructure guide](infra/README.md) for the existing AWS examples.

## License and attribution

This version is based on [Link-/ci-cd-intro](https://github.com/Link-/ci-cd-intro)
by Bassem Dghaidi (@Link-). The original [MIT license](LICENSE), including its
copyright notice, is retained. Publishing your own copy does not remove the
original author's attribution.
