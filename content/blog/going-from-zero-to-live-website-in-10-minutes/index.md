---
title: Going from zero to live website in ~10 minutes
date: 2019-06-07 00:00:00
tags: ['gatsby','netlify','cloudflare']
---

I recently helped a couple of friends get a website up and running having no prior experience in development/deployment procedures using the same stack as I use for my personal portfolio so I thought I'd write up a quick guide on how to go from 'zero to live website in ~10 minutes.'

We'll be using [Gatsby](https://www.gatsbyjs.org/) in this tutorial, but the steps will work for any similar javascript frameworks like [Vue](https://vuejs.org) or [React](https://reactjs.org/), or even just a plain html/css/js app. If you're new to dev it's probably worth looking in to a CLI and reading up a bit on the documentation to see how you can change pages to get them like you want, but I won't go in to too much detail about that in this post.

We'll also be using [Github](github.com), [Netlify](https://www.netlify.com), [Cloudflare](https://www.cloudflare.com/) and [Namecheap](https://www.namecheap.com/) for buying/configuring a domain name. Any domain providers will work but for this tutorial I'll be showing how to configure Namecheap.

The benefit behind using this stack is that you create a static website using the power of React/Gatsby, but can host it on several free hosting providers and even have it distributed from a CDN to increase page speeds even further. The only thing you'll have to pay for is the domain name, and even then Netlify provides you with a randomly generated one that you can use if you're not ready to get a domain yet!

### Creating your Gatsby app

Creating a Gatsby app is as simple as installing the CLI (command line interface) globally through `npm install -g gatsby` in the terminal and creating a new site with `gatsby new gatsby-site` (replacing gatsby-site with the name of your project).

Once created, `cd` (change directory) to the project and confirm it's created an initial commit with `git log`. If you see something like 'initial commit from Gatsby' then it's worked. If you have a load of unstaged files, commit them with `git add -A && git commit -m "Initial commit"`.

### Getting the repository on to GitHub

You'll want to get the repository pushed up to Github so Netlify can hook in to the build process. Netlify works well with GitLab and Bitbucket too, so if you prefer these or are already using them these will work just as well.

If you haven't got an existing GitHub account, you can create one for free [here](https://github.com/join?source=header-home). Once you've created one, create a new repository with the name of your project. You can write a short description of the project here and choose whether you want it to be a public or private repository. Skip the initialisation steps as we're importing from an existing repo.

Once created, you should get some handy steps to show you how to get an existing project pushed up, like this:

```
git remote add origin git@github.com:[your-user]/[your-repo].git
git push -u origin master
```

Follow these steps in your project and refresh the GitHub repository page once done. You should see your files in the repository at this point.

### Hooking up your project to Netlify

If you haven't got a Netlify account already, you can create one for free [here](https://app.netlify.com/signup). I've found the integration with GitHub account to be pretty flawless so it's probably worth signing up with your Github account (or Gitlab/Bitbucket if you're using those).

There's a few decent alternatives if you don't want to use Netlify like AWS/Surge.sh.

Once you're logged in to Netlify you should see a nice green button saying 'New site from Git.' Clicking this will take you through to a page where you can choose where your repository is hosted. In this case we'll click GitHub. We'll then be prompted to choose a repository from our account. Choose the one we created earlier.

You can choose which branch to deploy, this defaults to master which is usually fine. You can then specify build settings such as the build command and the publish directory. This should usually pull through by default, but a few examples are:

- Gatsby > Build command: `gatsby build`, publish directory: `public/`
- Vue (CLI 3) > Build command: `npm run build`, publish directory: `dist/`
- React (Create React App) > Build command: `npm run build`, publish directory: `build/`

If you have any environment variables that you don't want to include in source control, you can add them here under advanced build settings.

Once everything looks correct, click deploy site. You'll then get a dashboard for your project with a netlify.com domain name like https://stupefied-wilson-cafe46.netlify.com.

### Getting a domain name

I've used [Namecheap](https://www.namecheap.com/) for the last few years and have been impressed with the service they provide. Search for a domain you like and once bought, go to the domain list, find your domain and click manage. Leave this open as we'll be coming back to it shortly

### Hooking your domain up to Cloudflare

This step is optional but highly recommended. Cloudflare has a generous free plan which includes a CDN, always online versions of your app in case Netlify is down for some reason as well as protection against DDoS attacks, insights in to traffic and much more. If you don't have an account yet, you can create one [here](https://dash.cloudflare.com/sign-up).

Once logged in, click the 'Add a site' button. You'll be prompted to enter your domain name. Click add site, wait for it to query your DNS records then proceed. You should get to a screen which shows all the current A/CNAME/MX/TXT records etc.

After clicking continue, you'll be presented with two nameservers like `lucy.ns.cloudflare.com` and `piotr.ns.cloudflare.com`. Copy these and go to your Namecheap admin panel again. Under your domain settings, you should see a section labelled nameservers. Change it from 'Namecheap BasicDNS' to custom DNS and paste the two nameservers from cloudflare.

### Hooking Netlify up to Cloudflare

Now you have your DNS set up with Cloudflare you can tell it to point to your netlify site. To do this, go to the DNS tab within Cloudflare. In here, you should have an A record pointing to your domain name as well as a CNAME pointing to 'an alias of parkingpage.namecheap.com' if registered with namecheap. Delete the CNAME pointing to the parking page.

Go to your Netlify admin panel and under your project's dashboard, click settings then domain management. In the section titled Custom domains, there will be a button to add custom domain. Click this and enter your domain name; It should say the domain already has an owner, confirm this and wait for the sites to finish checking status.

You'll get a warning message saying 'Check DNS configuration.' Click this and copy the IP address from the `Alternative: point A record to [ip-address]` block.

Back in Cloudflare, modify your domain's A record to point to the copied IP address and also create a new A record with `www` as the name and the IP address as the value.

Under the Crypto tab, Turn on `Always Use HTTPS` and `Automatic HTTPS Rewrites`

__DONE!__ All being well, after waiting a little while (up to 24 hours at most usually) for the DNS records to update, your site will be live on your domain name. Any time you push commits to the master branch, it'll trigger a build on Netlify which will build and deploy itself in no time at all.

### Bonus

If you want to eliminate www from your address, you can set up a page rule within Cloudflare with the value of `https://www.your-domain.org/*` with a setting of `Forwarding URL`, `302 temporary redirect`, value `https://your-domain.org/$1`. It's also probably worth checking through the Cloudflare settings as there's some pretty interesting stuff in there.

### tl;dr

__Gatsby__ - Create a scaffolded app ready to work on and produce static sites with the power of React
__GitHub__ - Host your Git repository
__Netlify__ - Hook in to GitHub to build when commits are pushed to the master branch in your repository
__Namecheap__ - Buy and manage domain names
__Cloudflare__ - Let it handle your DNS and provide stuff like SSL certificates/Brotli Compression/Always online etc.
