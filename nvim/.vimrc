"PLUGINGS"
call plug#begin('~/.vim/plugged')
Plug 'pboettch/vim-cmake-syntax'
Plug 'vhdirk/vim-cmake'
Plug 'preservim/nerdtree'
Plug 'frazrepo/vim-rainbow'
Plug 'josa42/vim-lightline-coc'
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'stsewd/fzf-checkout.vim'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'jiangmiao/auto-pairs'
Plug 'tpope/vim-commentary'
Plug 'itchyny/lightline.vim'
Plug 'mbbill/undotree'
Plug 'vim-utils/vim-man'
Plug 'tpope/vim-fugitive'
Plug 'jremmen/vim-ripgrep'
Plug 'tpope/vim-fugitive'
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() }, 'for': ['markdown', 'vim-plug']}
Plug 'wsdjeg/vim-todo'
" SYNTAX
Plug 'leafgarland/typescript-vim'
Plug 'pangloss/vim-javascript'
Plug 'itchyny/vim-gitbranch'
Plug 'rust-lang/rust.vim'
Plug 'alvan/vim-closetag'
Plug 'mhinz/vim-startify'
Plug 'honza/vim-snippets'
Plug 'Chiel92/vim-autoformat'
Plug 'ekalinin/dockerfile.vim'
Plug 'mattn/emmet-vim'
" THEMES
Plug 'MaxMEllon/vim-jsx-pretty'
Plug 'morhetz/gruvbox'
Plug 'flazz/vim-colorschemes'
Plug 'tomasiser/vim-code-dark'
Plug 'Yggdroot/indentLine'
Plug 'wavded/vim-stylus'
call plug#end()

" Having longer updatetime (default is 4000 ms = 4 s) leads to noticeable
" delays and poor user experience.
set updatetime=50
"THEME"
colorscheme gruvbox
set background=dark
let g:gruvbox_contrast_dark='hard'
" colorscheme codedark
let g:airline_theme = 'codedark'

"BASIC SETTINGS"
syntax on

set noerrorbells
set tabstop=2 softtabstop=2
set shiftwidth=2
set expandtab
set smartindent
set number relativenumber
" set nu
set nowrap
set smartcase
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set incsearch
set directory=~/.vim-tmp,~/.tmp,~/tmp,/var/tmp,/tmp
set colorcolumn=100
set cursorline
set wildmenu
set showcmd
set lazyredraw
set showmatch
set hlsearch
set bs=2
set autoread
highlight ColorColumn ctermbg=0 guibg=lightgrey

"KEY BINDINGS"
let mapleader=" "
nnoremap <leader>h :wincmd h<CR>
nnoremap <leader>j :wincmd j<CR>
nnoremap <leader>k :wincmd k<CR>
nnoremap <leader>l :wincmd l<CR>
nnoremap <silent> <leader>+ :vertical resize +5<CR>
nnoremap <silent> <leader>- :vertical resize -5<CR>
nnoremap <leader>u :UndotreeShow<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>p :CtrlP<CR>
nnoremap <leader>w :w<CR>
nnoremap ® :t .<CR>
nnoremap ∆ :m .+1<CR>==
nnoremap ˚ :m .-2<CR>==
map Q :bdelete<CR>
map ∫ :NERDTreeFind<CR>
nnoremap ( :bn<CR>
nnoremap ) :bp<CR>
nmap <F3> :CocSearch 
nmap <leader>ee <Plug>(coc-codeaction-selected)
nmap <leader>gd <Plug>(coc-definition)
nmap <leader>gi <Plug>(coc-implementation)
nmap <leader>gt <Plug>(coc-type-definition)
nmap <leader>gr <Plug>(coc-references)
" GIT MAPS
nmap <leader>gc :GCheckout<CR>
nmap <leader>cc :Gcommit<CR>
nmap <leader>pp :Gpush<CR>
nmap <F2> <Plug>(coc-rename)
nnoremap ƒ <:CocCommand eslint.executeAutofix<CR>
noremap <leader>ff :Autoformat<CR>
inoremap <expr> <C-l> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"
nnoremap <C-p> :Files<CR>
nnoremap ç :Commentary<CR>
vnoremap ç :Commentary<CR>
nnoremap <Leader>ss :mks! ~/.vim-sessions/*.vim<C-D><BS><BS><BS><BS><BS>
nnoremap <Leader>sr :so ~/.vim-sessions/*.vim<C-D><BS><BS><BS><BS><BS>
nnoremap <F10> :so ~/.vimrc<CR>
nmap <leader>sb :Buffers<CR>
" Copy and paste from/to registers
noremap <Leader>y "*y
noremap <Leader>p "*p
noremap <Leader>Y "+y
noremap <Leader>P "+p
" DELEETE NOT CUT
nnoremap d "_d
vnoremap d "_d
nnoremap dd "_dd
vnoremap dd "_dd

" GLOBALS"
let g:sessions_dir = '~/.vim-sessions'
" let g:coc_disable_startup_warning = 1

" Rainbow
let g:rainbow_active = 1

" Light line
let g:lightline={}
let g:lightline.component_expand = {
  \   'linter_warnings': 'lightline#coc#warnings',
  \   'linter_errors': 'lightline#coc#errors',
  \   'linter_ok': 'lightline#coc#ok',
  \   'status': 'lightline#coc#status',
  \ }
" Set color to the components:
let g:lightline.component_type = {
  \   'linter_warnings': 'warning',
  \   'linter_errors': 'error',
  \   'linter_ok': 'left',
  \ }
let g:lightline.active = { 
      \     'right': [[ 'coc_errors', 'coc_warnings', 'coc_ok' ]],
      \     'left': [ [ 'mode', 'paste' ],
      \             [ 'gitbranch', 'readonly', 'filename', 'modified' ] ]
      \     }
let g:lightline.component_function = {
      \   'gitbranch': 'gitbranch#name',
      \   'filename': 'LightlineFilename',
      \ }

function! LightlineFilename()
  let root = fnamemodify(get(b:, 'git_dir'), ':h')
  let path = expand('%:p')
  if path[:len(root)-1] ==# root
    return path[len(root)+1:]
  endif
  return expand('%')
endfunction

" RG ALLWAYS DETECT THE ROOT PATH"
if executable('rg')
  let g:rg_derive_root='true'
endif

autocmd BufNewFile,BufRead *.tsx,*.jsx set filetype=typescript.tsx 
" set filetypes as typescript.tsx

" MAPPING ALT KEY CORRECTLY
" if !has('nvim')
"  let c='a'
   "while c <= 'z'
"    exec "set <A-".c.">=\e".c
   " exec "imap \e".c." <A-".c.">"
   " let c = nr2char(1+char2nr(c))
 " endw
"endif
"set timeout ttimeoutlen=50

" NETRW
let g:netrw_banner = 0

" NERD TREE
let NERDTreeHijackNetrw=1
let NERDTreeQuitOnOpen=1

" CLOSE TAGS
let g:closetag_filenames = '*.html,*.xhtml,*.phtml,*.js,*.tsx'
let g:closetag_xhtml_filenames = '*.xhtml,*.js,*.tsx'
let g:closetag_filetypes = 'html,xhtml,phtml,js,tsx'
let g:closetag_xhtml_filetypes = 'xhtml,js,tsx'
let g:closetag_emptyTags_caseSensitive = 1
let g:closetag_regions = {
    \ 'typescript.tsx': 'jsxRegion,tsxRegion',
    \ 'javascript.js': 'jsxRegion',
    \ }
let g:closetag_shortcut = '>'
let g:closetag_close_shortcut = '<leader>>'

" ripgrep
let  g:rg_binary = 'rgrep'

" autoformat
let g:autoformat_autoindent = 0
let g:autoformat_retab = 0
let g:autoformat_remove_trailing_spaces = 0
" C and C++
let g:formatdef_my_custom_c = '"clang-format --style=LLVM"'
let g:formatters_c = ['my_custom_c']
let g:formatdef_my_custom_cxx = '"clang-format --style=LLVM"'
let g:formatters_cxx = ['my_custom_c']

" fzf
" See `man fzf-tmux` for available options
let g:fzf_layout = { 'window': { 'width': 0.9, 'height': 0.6 } }
let $FZF_DEFAULT_OPTS='--reverse'
let $FZF_DEFAULT_COMMAND='ag --hidden --ignore .git -g ""'

" IDENT GUIDES
let g:indentLine_char = '¦'

let g:vim_jsx_pretty_colorful_config = 1

" Triger `autoread` when files changes on disk
" https://unix.stackexchange.com/questions/149209/refresh-changed-content-of-file-opened-in-vim/383044#383044
" https://vi.stackexchange.com/questions/13692/prevent-focusgained-autocmd-running-in-command-line-editing-mode
autocmd FocusGained,BufEnter,CursorHold,CursorHoldI *
  \ if mode() !~ '\v(c|r.?|!|t)' && getcmdwintype() == '' | checktime | endif
