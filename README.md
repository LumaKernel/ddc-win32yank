# ddc-win32yank

[![Doc](https://img.shields.io/badge/doc-%3Ah%20ddc--registers--words-orange.svg?style=flat-square)](doc/ddc-win32yank.txt)

[win32yank.exe](https://github.com/equalsraf/win32yank) Completion for ddc.vim

## Required

- [denops.vim](https://github.com/vim-denops/denops.vim)
- [ddc.vim](https://github.com/Shougo/ddc.vim)
- [win32yank.exe](https://github.com/equalsraf/win32yank)

## Configuration

```vim
call ddc#custom#patch_global('sources', ['win32yank'])
call ddc#custom#patch_global('sourceOptions', {
    \ 'win32yank': {
    \   'mark': 'CLIP',
    \ }})
```
