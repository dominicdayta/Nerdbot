# NerdBot For Discord
## Written By Dominic Dayta

This repository contains codes used for my trial development of a discord mod/function bot. The Nerdbot is designed to perform some basic functions, outlined below.

The Nerdbot is written in Javascript and runs on Node.

### Commands

All commands begin with `!nerd` followed by the command, and your arguments. Note that extraneous arguments will be ignored by the nerd! Usage is `!nerd take <word>`.

`take`: Make the Nerdbot take an item.

```
!nerd take cake
> Oh boy, you make me happy. Thank you for the cake!
```

`say`: Make the nerdbot say something. Note, this uses the Text-To-Speech (TTS) feature on Discord.  Usage is `!nerd say <anything>`.

```
!nerd say Hello
```

`play`: Make the nerdbot play a Youtube link on a voice channel. (Current implementation only plays on the General voice channel.)  Usage is `!nerd play <Youtube URL>`.

```
!nerd play https://www.youtube.com/watch?v=w0pPGOaHm5Y
```

Please know that the Nerdbot can be quite sassy. Calling the Nerdbot without any argument often leads to this sassy retort:

```
!nerd
> You did it, you summoned the nerdbot. Lucky you! For your information, you summon me with a command, like !nerd take candy. Try it.
```

### Authorization

In order to use the Nerdbot (as a developer), you must obtain a Discord token and save it inside a `.env` file or an `auth.json` file.

#### Environment File
```
DISCORD_TOKEN=XXXXXXYYYYYYYYYZZZZZ
```
#### Auth.JSON
```
{
  "token": "XXXXXXYYYYYYYYYZZZZZ"
}
```