# Introduction
If you've ever wanted to manage your schedule with a calendar app, you’ve probably felt limited to the big three: Google, Apple, or Microsoft. While other options exist, most are simply frontends, meaning your actual data still ends up stored and controlled by one of these corporations.

**Git Calendar** changes that. Built on [Git](https://git-scm.com), it gives you full control over where your data lives. Host it on your own server or with any Git provider such as GitHub, GitLab, or Codeberg.

## Why Git?
Because Git is cool. While its biggest feature is versioning, it also has other features/advantages that are great for using it is as a calendar backend.
- **Efficient Delta Synchronization**\
  One of the biggest advantages of the [CalDAV](https://en.wikipedia.org/wiki/CalDAV) protocol (the industry standard for calendars) is that it only downloads changes, not the whole calendar every time. Guess what? Git does that too.
- **Offline-First**\
  Users can edit their calendar locally without an internet connection. Changes sync automatically when the connection is restored.
- **Decentralized**\
  Data isn't tied to a single server or cloud provider. Users can host their calendar on their own infrastructure or a public provider (e.g., GitHub, GitLab, Codeberg). Switching providers is as simple as changing the remote.
- **No backend**\
  Git Calendar uses plain Git repositories as the storage and synchronization layer. No calendar server to run or maintain; just your client talking directly to a Git remote. One less middleman.
