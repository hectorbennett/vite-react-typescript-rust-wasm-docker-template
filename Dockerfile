FROM node:18.12.1
# FROM rust:1.31

# Install rust
# Get Rust; NOTE: using sh for better compatibility with other base images
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

# Add .cargo/bin to PATH
ENV PATH="/root/.cargo/bin:${PATH}"

# Check cargo is visible
RUN cargo --help

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g wasm-pack
RUN npm install

COPY . .

ENV NODE_ENV=production
RUN npm run build