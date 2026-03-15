# Introduction
## The [Core](https://github.com/git-calendar/core) - Write once, run everywhere
The Core is the central component of the Git Calendar project.
By keeping all the calendar logic in a [Core](https://github.com/git-calendar/core) and using Git as a decentralized backend, you ensure that every version of the app (Web, Android, and iOS) behaves exactly the same way.

<picture>
    <img src="/assets/cross-platform-light.svg" class="vp-light" alt="cross-platform diagram">
    <img src="/assets/cross-platform-dark.svg" class="vp-dark" alt="cross-platform diagram">
</picture>

### Why Go?
While Rust or Zig might have been technically better suited for Core, we ultimately chose Go due to team familiarity and its Git implementation [go-git](https://github.com/go-git/go-git), which is exceptionally mature project and Git Calendar would not be possible without it.
