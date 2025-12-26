#!/bin/bash

# AI Resume Builder - Vercel Deployment Script
# This script helps you deploy both server and client to Vercel

echo "🚀 AI Resume Builder - Vercel Deployment"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if vercel is installed
if ! command -v vercel &> /dev/null
then
    echo -e "${YELLOW}⚠️  Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
fi

echo -e "${BLUE}📝 Step 1: Login to Vercel${NC}"
echo "This will open your browser for authentication..."
vercel login

echo ""
echo -e "${BLUE}🖥️  Step 2: Deploy Server (Backend)${NC}"
echo "Deploying server to Vercel..."
cd server
vercel --prod

echo ""
echo -e "${GREEN}✅ Server deployed!${NC}"
echo ""
echo -e "${YELLOW}📋 IMPORTANT: Copy your server URL from above${NC}"
echo -e "${YELLOW}You'll need it for the client deployment${NC}"
echo ""
read -p "Press Enter when you've copied the server URL..."

echo ""
echo -e "${BLUE}🎨 Step 3: Deploy Client (Frontend)${NC}"
echo "Deploying client to Vercel..."
cd ../client
vercel --prod

echo ""
echo -e "${GREEN}✅ Client deployed!${NC}"
echo ""
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Add environment variables to both projects in Vercel dashboard"
echo "2. Redeploy after adding env vars"
echo "3. Test your application"
echo ""
echo "See VERCEL_DEPLOYMENT.md for detailed instructions"
