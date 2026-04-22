# Relatório SEO/GEO — MD Advocacia RJ

> Auditoria e implementação realizadas em: 2026-04-22

---

## O Que Foi Implementado

### Title Tag
- **Antes:** `MD Advocacia RJ | A Defesa Que Não Dorme`
- **Depois:** `Advogado Barra da Tijuca e Zona Oeste RJ | MD Advocacia — Marcos Dias OAB/RJ 263909`
- **Por quê:** Front-loading com palavra-chave + localização no início aumenta CTR. Inclui OAB para E-E-A-T.

### Meta Description
- **Antes:** Texto genérico sem localização específica
- **Depois:** 158 chars com keyword principal, localização, áreas, plantão 24h e CTA implícito

### Canonical Tag
```html
<link rel="canonical" href="https://mdadvocaciarj.com.br/">
```

### Open Graph (Facebook / WhatsApp / LinkedIn)
Implementados: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:image:width`, `og:image:height`, `og:url`, `og:locale`

### Twitter Cards
Implementados: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### Geo Tags (Local SEO)
```html
<meta name="geo.region" content="BR-RJ">
<meta name="geo.placename" content="Barra da Tijuca, Rio de Janeiro">
<meta name="geo.position" content="-23.0046;-43.3219">
<meta name="ICBM" content="-23.0046, -43.3219">
```

### Schema.org JSON-LD — 3 schemas implementados

#### 1. LegalService + LocalBusiness
Contém: nome, descrição, telefones, endereço, coordenadas, horários (incluindo plantão penal 24h), fundador (Dr. Marcos Dias + OAB), áreas de atendimento, catálogo de serviços, Instagram.

#### 2. FAQPage
5 perguntas e respostas extraídas diretamente da seção FAQ do site — gera Rich Snippets no Google e aumenta citações em IAs (GEO).

#### 3. AggregateRating
Rating 5.0/5 com base nas 3 avaliações presentes no carrossel.

### Core Web Vitals

| Melhoria | O que foi feito |
|---|---|
| **LCP** | `fetchpriority="high"` adicionado à hero image |
| **CLS** | `width="1200" height="800"` adicionados à hero image |
| **INP** | `defer` adicionado ao `<script src="script.js">` |

### robots.txt
Criado em `/robots.txt` com:
- `Allow: /` para todos os bots
- Permissões explícitas para bots de IA: GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- Referência ao sitemap

### sitemap.xml
Criado em `/sitemap.xml` com a URL raiz, data de atualização e prioridade 1.0.

---

## Checklist de Tarefas Externas (Off-Page)

Estas tarefas **não podem ser feitas no código** — precisam ser executadas manualmente:

### Alta Prioridade
- [ ] **Domínio:** Registrar e configurar `mdadvocaciarj.com.br` (atualizar `canonical`, `og:url`, `sitemap.xml` e `robots.txt` com o domínio real após hospedar)
- [ ] **Google Search Console:** Criar conta, verificar domínio e submeter `https://mdadvocaciarj.com.br/sitemap.xml`
- [ ] **Google Meu Negócio:** Criar/verificar perfil com o mesmo NAP do site (nome, endereço, telefone). O endereço e telefone devem ser idênticos aos do site
- [ ] **SSL/HTTPS:** Garantir que o servidor force HTTPS (certificado SSL ativo)

### Média Prioridade
- [ ] **Google Analytics 4:** Instalar tag GA4 para monitorar tráfego orgânico
- [ ] **PageSpeed Insights:** Testar em `pagespeed.web.dev` após deploy para medir LCP/INP/CLS reais
- [ ] **Instagram (@mdadvocaciarj):** Adicionar link do site na bio do perfil (cria backlink social)
- [ ] **OAB/RJ — Cadastro Digital:** Verificar se o escritório está listado corretamente no portal da OAB-RJ

### Baixa Prioridade / Futuro
- [ ] **Avaliações Google:** Solicitar ao cliente link do Google Meu Negócio para importar avaliações reais e atualizar o `ratingCount` no schema
- [ ] **LinkedIn:** Criar perfil pessoal do Dr. Marcos Dias com menção ao escritório
- [ ] **Foto profissional Dr. Marcos Dias:** Pendência listada no dossiê — ao receber, substituir o avatar placeholder na seção de citação e atualizar o schema `founder.image`
- [ ] **Backlinks locais:** Solicitar listagem em diretórios jurídicos (Jusbrasil, DireitoNet, OAB) e diretórios locais (Barra da Tijuca, Zona Oeste RJ)

---

## Score SEO — Antes vs Depois

| Item | Antes | Depois |
|---|---|---|
| Title tag otimizada (front-loading + localização) | ❌ | ✅ |
| Meta description (150-160 chars) | ⚠️ Genérica | ✅ |
| Canonical tag | ❌ | ✅ |
| Open Graph completo | ❌ | ✅ |
| Twitter Cards | ❌ | ✅ |
| Geo tags (Local SEO) | ❌ | ✅ |
| Schema LocalBusiness/LegalService | ❌ | ✅ |
| Schema FAQPage (Rich Snippets + GEO) | ❌ | ✅ |
| Schema AggregateRating | ❌ | ✅ |
| `fetchpriority="high"` na hero (LCP) | ❌ | ✅ |
| `width`/`height` na hero (CLS) | ❌ | ✅ |
| `defer` no script.js (INP) | ❌ | ✅ |
| Imagens `.webp` | ✅ | ✅ |
| `loading="lazy"` em imagens abaixo do fold | ✅ | ✅ |
| Google Fonts com `display=swap` | ✅ | ✅ |
| `robots.txt` | ❌ | ✅ |
| `sitemap.xml` | ❌ | ✅ |
| `lang="pt-BR"` | ✅ | ✅ |
| NAP visível em texto no HTML | ✅ | ✅ |
| Favicon local (não Unsplash) | ✅ | ✅ |
