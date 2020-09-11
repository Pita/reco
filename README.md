# reco

Regular Expression COmpiler - Compile a regex ahead of time for extra performance

# Idea

The idea is to generate code thats equivalent to a given regex at compile time. The goal is that this code can run faster or at least equaly fast as the built in native regex engine of V8. Small scale experimentation has shown that this is often possible. It might even be possible to generate code in different languages (JS, TS, Rust, Go, Java) via an Intermediate Representation Step
