eval "$(/opt/homebrew/bin/brew shellenv)"

export PATH="/usr/local/opt/mongodb-community@6.0/bin:$PATH"




alias gc="git checkout $1"
# alias python="/usr/local/bin/python3"
export PATH="$PATH:/Users/Shmuli/Library/Python/3.9/bin"
export PATH="$PATH:/Users/Shmuli/scripts"
export PATH="$PATH:/Users/Shmuli/downloads/go/bin"
export PATH="$HOME/.local/bin:$PATH"
export TMPDIR="/tmp"
export PGDATA=/usr/local/var/postgres
export PATH="$PATH:/Users/shmuli/.dotnet/tools"
export PATH="$PATH:/Users/shmuli/Downloads/zig-aarch64-macos-0.16.0-dev.1316+181b25ce4/"
PATH=~/.console-ninja/.bin:$PATH


# source /Users/Shmuli/coding-projects/wasm/emsdk/emsdk_env.sh
alias b="npm run build"

# alias code="open -a 'visual studio code' $1"
alias .="code ."
alias p="python3 main.py"
alias run='function run_cpp { g++ -std=c++20 "$1.cpp" -o "$1" && ./"$1"; }; run_cpp'
alias cz="code ~/.zshrc"
alias sz="source ~/.zshrc"
alias m="run main"
alias clean="mv *.png images/; mv *.jpg images/"
alias scatter="mv images/*.png .; mv images/*.jpg ."
alias ir="python3 -m pip install -r requirements.txt"
alias pdp="./pythonDynamicPush.sh"
alias sz="source ~/.zshrc; echo 'sourced zshrc'"
alias gl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
alias repo="cd ~/repositories; ls"
alias co="cd ~/coding-projects; ls"
alias gnb="git checkout -b"
alias gb="git branch"
alias gm="git switch main"
alias gs="git switch $1"
alias wasmCompile="emcc ../main.cpp -o main.js -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'"
alias psql="/Library/PostgreSQL/17/scripts/runpsql.sh"
# alias g="templ generate && go run *.go"
alias g="go run ."
# alias g-s="git init; git add .; git commit -m 'initial commit'; git remote add origin https://github.com/Shmuli/coding-projects.git; git push -u origin main"

alias v="python3 -m venv venv && source venv/bin/activate"
alias s="source venv/bin/activate"
alias c="clear && printf '\e[3J'"
alias i="open index.html"
alias os="ollama serve"
alias o="ollama"
alias ft="grep -r '//Todo'"
alias fr="npm create solid frontend && cd frontend && npm install && windsurf src/App.tsx && open http://localhost:3001 && npm run dev"

alias rd="python3 /Users/shmuli/scripts/fileMaker.py"
alias open_rd_script="code /Users/shmuli/scripts/fileMaker.py"
alias cdl="cd ~/lab"
ws() {
  mkdir "$1" && windsurf "$1"
}

# . "/Users/shmuli/.deno/env"export PATH="$PATH:/Users/shmuli/.modular/bin"
export PATH="$PATH:/Users/shmuli/.modular/bin"


# Added by Windsurf
export PATH="/Users/shmuli/.codeium/windsurf/bin:$PATH"
export PATH="/usr/local/opt/openjdk/bin:$PATH"
export PATH=$PATH:$(go env GOPATH)/bin

export GOOGLE_APP_PASSWORD="heda fxyl fwvi basf"
alias j="npm run dev"
alias p="python3 main.py"
export NVM_DIR="$HOME/.nvm"
alias yz="yazi"
rbenv init
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# BEGIN opam configuration
# This is useful if you're using opam as it adds:
#   - the correct directories to the PATH
#   - auto-completion for the opam binary
# This section can be safely removed at any time if needed.
[[ ! -r '/Users/shmuli/.opam/opam-init/init.zsh' ]] || source '/Users/shmuli/.opam/opam-init/init.zsh' > /dev/null 2> /dev/null
# END opam configuration
alias dr='dotnet run'
export CLASSPATH=".:/usr/local/opt/antlr/libexec/antlr-4.13.1-complete.jar:$CLASSPATH"
export DevMode="yes that me"
alias antlr4="java -Xmx500M -cp /usr/local/opt/antlr/libexec/antlr-4.13.1-complete.jar org.antlr.v4.Tool"
alias grun="java -Xmx500M -cp /usr/local/opt/antlr/libexec/antlr-4.13.1-complete.jar org.antlr.v4.gui.TestRig"
export PORT="5001"
alias dap="dotnet add package" 
alias cg="class-generator.py"

sgf() {
  rg "$1" /Users/shmuli/repositories/*/*.go
}

spf() {
  rg "$1" /Users/shmuli/repositories/*/*.py
}

sjf() {
  rg "$1" /Users/shmuli/repositories/*/*.js
  rg "$1" /Users/shmuli/repositories/*/*.jsx
  rg "$1" /Users/shmuli/repositories/*/*.ts
  rg "$1" /Users/shmuli/repositories/*/*.tsx
}

scf() {
  rg "$1" /Users/shmuli/repositories/*/*.cs
}

alias game="cmake --build build --target all && ./build/mygame"
alias nproc="gcpus" # or use gnproc from coreutils (but it's 'gnproc' not 'nproc')
export RUST_BACKTRACE=1
alias crab="cargo run"
alias ct="cargo test"
RUSTFLAGS="-Awarnings" cargo build



project="project-rc.sh"
[ -d "$project" ] || touch "$project"
source ./project-rc.sh

vscode_folder=".vscode"
[ -d "$vscode_folder" ] || mkdir .vscode && touch .vscode/rust.code-snippets
export PATH="$HOME/.local/bin:$PATH"
export PATH="/opt/homebrew/opt/libpq/bin:$PATH"
export PATH=$PATH:$(go env GOPATH)/bin
export PATH="$PATH:/path/to/zig-macos-aarch64-0.13.0"

# moonbit
export PATH="$HOME/.moon/bin:$PATH"
