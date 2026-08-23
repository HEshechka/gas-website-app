---
name: premium-brand-design-suite
description: "Unified product-design skill stack: brand, design system, UI styling, banners, slides, and premium landing-page implementation. Use this when a task spans strategy, visual identity, UI code, and marketing assets."
argument-hint: "[task] [context]"
license: MIT
metadata:
  author: claudekit
  version: "1.0.0"
---

# Premium Brand Design Suite

This is the master skill that composes all prompt-based design capabilities in this repository.

## Included Skills

- Brand: `.github/prompts/brand/SKILL.md`
- Design System: `.github/prompts/design-system/SKILL.md`
- Visual Design: `.github/prompts/design/SKILL.md`
- UI Styling: `.github/prompts/ui-styling/SKILL.md`
- Banner Design: `.github/prompts/banner-design/SKILL.md`
- Slides: `.github/prompts/slides/SKILL.md`

## When to Use This Skill

Use this master skill when the work is bigger than a single component and spans multiple design layers:

- premium redesign of a landing page
- brand + UI styling + design system together
- marketing page with hero banner, motion, pricing, and CTAs
- presentation/storytelling for investors or clients
- visual identity tasks with converted implementation in code

## Routing Logic

When the task is broad, activate this skill first and then route to the appropriate sub-skill:

1. Brand and positioning
   - `.github/prompts/brand/SKILL.md`
2. Design tokens and system consistency
   - `.github/prompts/design-system/SKILL.md`
3. Visual identity and art direction
   - `.github/prompts/design/SKILL.md`
4. Frontend UI implementation and component styling
   - `.github/prompts/ui-styling/SKILL.md`
5. Hero banner / campaign visuals
   - `.github/prompts/banner-design/SKILL.md`
6. Presentation decks and strategic slides
   - `.github/prompts/slides/SKILL.md`

## Default Workflow

### 1. Define the product story
- audience
- offer
- brand tone
- desired premium feel

### 2. Lock the system
- color palette
- typography scale
- spacing and density
- component states

### 3. Build the interface
- hero
- trust section
- features/services
- CTA blocks
- form/contact section

### 4. Add campaign visuals and supporting sales materials
- hero banners
- slide deck
- marketing narrative

## Working Rule

The project should not rely on only one aesthetic layer. The high-quality result comes from combining:

- Brand strategy
- Design-system structure
- Premium UI styling
- Marketing banners and messaging
- Presentation/story flow

In practice:

- Use brand for tone and positioning
- Use design-system for tokens and consistency
- Use design for art direction and visual refinement
- Use ui-styling for actual code implementation
- Use banner-design and slides when the page needs marketing or presentation assets

## Example Usage

"Create a premium landing page for a gas company with dark luxury styling and preserved text and palette"

Flow:
- master skill
- brand: current market positioning and trust message
- design-system: premium dark token system
- ui-styling: actual React/Tailwind implementation
- banner-design: supporting hero campaign visual
- slides: presentation or pitch if needed

## Rule for This Project

For this repo, the design work should be handled as a combined premium-marketing design system, with the UI implementation staying faithful to the existing text and palette while raising the brand expression, layout depth, motion, and conversion clarity.
