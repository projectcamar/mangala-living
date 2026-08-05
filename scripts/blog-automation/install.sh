#!/bin/bash
# Mangala Living — VPS Blog Automation Setup Script
# Server: Singapore Ubuntu (43.159.44.156)
# Schedule: 3x per day (08:00, 14:00, 20:00 WIB / 01:00, 07:00, 13:00 UTC)

set -e

echo "🚀 Installing Blog Automation Service on VPS..."

# 1. Update system packages
sudo apt-get update -y
sudo apt-get install -y curl git jq cron

# 2. Install Node.js 20 if not present
if ! command -v node &> /dev/null; then
    echo "Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Node version: $(node -v)"
echo "Git version: $(git --version)"

# 3. Configure Git credentials for auto-pushing
echo "Configuring Git user..."
git config --global user.name "Mangala Auto Publisher"
git config --global user.email "lifewithmangala@gmail.com"

# 4. Set environment variables in ~/.bashrc if not already present
OPENROUTER_KEY="${OPENROUTER_API_KEY:-YOUR_OPENROUTER_API_KEY}"
GROQ_KEY="${GROQ_API_KEY:-YOUR_GROQ_API_KEY}"

grep -qF "OPENROUTER_API_KEY" ~/.bashrc || echo "export OPENROUTER_API_KEY=\"$OPENROUTER_KEY\"" >> ~/.bashrc
grep -qF "GROQ_API_KEY" ~/.bashrc || echo "export GROQ_API_KEY=\"$GROQ_KEY\"" >> ~/.bashrc

export OPENROUTER_API_KEY="$OPENROUTER_KEY"
export GROQ_API_KEY="$GROQ_KEY"

# 5. Create Cron job for 3x daily runs (08:00, 14:00, 20:00 WIB / 01:00, 07:00, 13:00 UTC)
CRON_JOB="0 1,7,13 * * * export OPENROUTER_API_KEY=\"$OPENROUTER_KEY\" && export GROQ_API_KEY=\"$GROQ_KEY\" && cd $(pwd) && node scripts/blog-automation/generate-blog.cjs >> /tmp/blog-automation.log 2>&1"

(crontab -l 2>/dev/null | grep -v "generate-blog.cjs" ; echo "$CRON_JOB") | crontab -

echo "✅ Cron job scheduled successfully (3x per day: 08:00, 14:00, 20:00 WIB)."
echo "📋 Active crontab:"
crontab -l

echo ""
echo "🎉 Setup complete! You can test run the script manually with:"
echo "node scripts/blog-automation/generate-blog.cjs"
