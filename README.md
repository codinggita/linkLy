# LinkLy

**AI-powered CRM for small businesses — built for WhatsApp, designed for simplicity.**

> **Figma Design File:** [https://www.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=9-2&t=w1wdrqYahbsPpSn5-1](https://www.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=9-2&t=w1wdrqYahbsPpSn5-1)

[![Figma](https://img.shields.io/badge/Figma-Design-F24E1E?style=flat&logo=figma&logoColor=white)](https://www.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=9-2&t=w1wdrqYahbsPpSn5-1)
[![License](https://img.shields.io/badge/License-MIT-black?style=flat)](LICENSE)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://linkly.vercel.app)

---

## Overview

LinkLy is a lightweight CRM designed for micro-businesses — kirana shops, tailors, tutors, salons, and local service providers — who need customer management without the complexity of enterprise tools. It integrates deeply with WhatsApp, uses AI to automate repetitive tasks, and works as a Progressive Web App installable on any Android phone.

The core problem it solves: traditional CRM software is built for large sales teams. Small business owners need something they can use in 30 seconds after a customer visit — logging a sale, setting a follow-up, or checking who owes them money. LinkLy is that tool.

---

## Features

**Lead Management**
Track leads through a visual kanban pipeline from first contact to conversion. AI scores each lead based on interaction frequency and response patterns. Leads convert to contacts in a single tap.

**Sales Automation**
Automatically log sales, trigger follow-up reminders after purchases, flag overdue payments, and detect recurring order patterns. Reduces manual work to near zero for routine tasks.

**Omnichannel Communication**
Reach customers via WhatsApp, phone, SMS, or email — all from the same contact card. Every interaction is logged under a unified timeline so nothing gets missed.

**Analytics**
Revenue dashboards broken down by day, week, or month. Lead conversion funnel, top customers by spend, payment collection rate, and a churn risk report showing customers who haven't bought in 30, 60, or 90 days.

**Workflow Automation**
A simple rule builder: set conditions and actions without writing code. Example: *If a customer hasn't bought in 30 days → send a follow-up reminder*. Workflows run silently in the background.

**Mobile App (PWA)**
Installable on Android from the browser — no app store required. Works offline for viewing contacts and logging orders. Push notifications fire even when the app is closed.

**AI Insights**
A conversational AI assistant that understands your business data. Ask questions in Hindi or English: *"Who owes me money?"*, *"What's my best-selling product this month?"*, *"Which customers need a follow-up?"*. Generates a daily morning briefing automatically.

**Call Tracking**
Log every customer call with duration and outcome directly from the contact card. A post-call prompt captures the result in one tap. AI surfaces contacts you called regularly but haven't reached recently.

**Marketing Integration**
Build customer segments by tag, spend, or last purchase date. Send bulk WhatsApp broadcasts to a segment. Track response rates per campaign. Pre-built festival message templates included.

**Voice-to-CRM** *(Unique)*
Speak after any customer visit — AI transcribes the note and auto-fills the contact, order, amount, and follow-up reminder. Works in Hindi and English. No typing required.

**Customer Health Score** *(Unique)*
Every customer receives a 0–100 score updated daily, calculated from purchase recency, frequency, and payment reliability. Color-coded Green / Yellow / Red so the owner sees at a glance who needs attention today.

---

## Tech Stack

| | |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, Zustand |
| Backend | Node.js, Express |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| AI | Anthropic Claude API |
| Voice | OpenAI Whisper API |
| Push Notifications | Firebase Cloud Messaging |
| SMS | Twilio |
| Email | Resend |
| Broadcast | WhatsApp Business API |
| Deployment | Vercel + Railway |

---

## Project Structure

```
linkly/
├── frontend/
│   └── src/
│       ├── pages/          # One file per screen
│       ├── components/     # contacts, leads, orders, analytics, ai, voice, shared
│       ├── hooks/          # useContacts, useLeads, useOrders, useAIChat, useVoice …
│       ├── services/       # api, supabase, claude, whisper, fcm
│       ├── store/          # Zustand stores
│       └── utils/          # formatCurrency, waLink, healthScoreCalc …
│
├── backend/
│   └── src/
│       ├── routes/         # auth, contacts, leads, orders, analytics, ai, voice …
│       ├── controllers/    # one controller per route
│       ├── services/       # claude, whisper, healthScore, workflow, broadcast …
│       ├── middleware/     # auth, validate, rateLimit, error
│       └── jobs/           # dailySummary, healthScore, workflowEval, reminders
│
└── supabase/
    └── migrations/         # SQL migration files
```

---

## Getting Started

**Prerequisites:** Node.js 18+, Supabase project, Anthropic API key, OpenAI API key, Firebase project.

```bash
git clone https://github.com/yourusername/linkly.git
cd linkly

# Backend
cp backend/.env.example backend/.env
cd backend && npm install && npm run dev

# Frontend
cp frontend/.env.example frontend/.env
cd frontend && npm install && npm run dev
```

Key environment variables:

```env
SUPABASE_URL=
SUPABASE_SERVICE_KEY=
ANTHROPIC_API_KEY=
OPENAI_API_KEY=
FIREBASE_SERVICE_ACCOUNT=
TWILIO_ACCOUNT_SID=
RESEND_API_KEY=
WHATSAPP_BUSINESS_TOKEN=
```

---

## Pricing

| Plan | Price | Limits |
|------|-------|--------|
| Free | ₹0 / month | Up to 50 contacts, core CRM only |
| Pro | ₹299 / month | Unlimited contacts, AI assistant, analytics, health score |
| Business | ₹499 / month | Everything in Pro + voice-to-CRM, workflows, broadcast |

---

## Roadmap

- [x] Project design and planning
- [ ] Contacts, orders, WhatsApp deep link
- [ ] Lead pipeline with AI scoring
- [ ] AI chat assistant and daily summary
- [ ] Analytics dashboard
- [ ] Workflow automation engine
- [ ] Call tracking
- [ ] Voice-to-CRM
- [ ] Customer health score
- [ ] Bulk WhatsApp broadcast and campaigns
- [ ] Hindi language support
- [ ] PDF export

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and open a pull request

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

<p align="center">Built for small business owners across India — LinkLy keeps it simple.</p>
