apt-get update -y && apt-get upgrade -y && apt-get install -y \
    curl \
    openssl \
    zip \
    unzip \
    lsb-release \
    apt-transport-https \
    ca-certificates \
    wget \
    nano \
    gnupg \
    build-essential
# Add Node JS repository
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
# Install Node.js and npm
apt-get install -y nodejs