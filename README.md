# Wheel Project (SLS + Nextjs + GraphQL)

Project created using Serveless Framework. 
## Stack
It includes 2 subprojects, API and Frontend. Both of them are integrated to with CI/CD thanks to Github Actions.
### API
* Serverless, handle the infrastructure for the Lambda and the DynamoDB Table.
* Graphql with Apollo Server.
* Typescript

### Frontend
* Serverless, in this scenario using (sls-next/component)(https://www.serverless.com/blog/serverless-nextjs), which automatically create the lambda(s) using Lambda@Edge, it also push the assets to S3 and cache them with Cloudfront.
* NextJS
* Typescript
* NextAuth to handle Google OAuth.

## AWS Infra
![](https://p9.f1.n0.cdn.getcloudapp.com/items/E0urOOnd/Image%202020-11-03%20at%208.21.42%20PM.png?source=viewer&v=e6ff7bbbee85eade2569c8b4bdec7c66)
