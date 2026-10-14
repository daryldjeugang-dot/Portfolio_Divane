import { useState } from 'react'
import { useTranslation } from '../context/LanguageContext'
import './TerminalPanel.css'

const COMMANDS = ['help', 'about', 'skills', 'projects', 'contact', 'clear', 'secret']

export default function TerminalPanel() {
  const { t } = useTranslation()
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: t('terminal.lines.boot') },
    { type: 'system', text: t('terminal.lines.hint') },
  ])

  const responses = {
    help: t('terminal.responses.help'),
    about: t('terminal.responses.about'),
    skills: t('terminal.responses.skills'),
    projects: t('terminal.responses.projects'),
    contact: t('terminal.responses.contact'),
    secret: t('terminal.responses.secret'),
  }

  const submitCommand = (event) => {
    event.preventDefault()
    const command = input.trim().toLowerCase()
    if (!command) return

    if (command === 'clear') {
      setHistory([{ type: 'system', text: t('terminal.lines.cleared') }])
      setInput('')
      return
    }

    const response = responses[command] || t('terminal.responses.unknown')
    setHistory((items) => [
      ...items.slice(-6),
      { type: 'command', text: `visitor@daryl:~$ ${command}` },
      { type: command === 'secret' ? 'success' : 'output', text: response },
    ])
    setInput('')
  }

  return (
    <aside className="terminal-panel" aria-label={t('terminal.label')}>
      <div className="terminal-topbar">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot-red" />
          <span className="dot-yellow" />
          <span className="dot-green" />
        </div>
        <span className="terminal-title">{t('terminal.title')}</span>
        <span className="terminal-status">{t('terminal.status')}</span>
      </div>

      <div className="terminal-body" aria-live="polite">
        {history.map((line, index) => (
          <p key={`${line.type}-${index}`} className={`terminal-line terminal-${line.type}`}>
            {line.text}
          </p>
        ))}
      </div>

      <form className="terminal-form" onSubmit={submitCommand}>
        <label htmlFor="terminal-command" className="sr-only">{t('terminal.inputLabel')}</label>
        <span className="terminal-prompt" aria-hidden="true">$</span>
        <input
          id="terminal-command"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t('terminal.placeholder')}
          autoComplete="off"
          spellCheck="false"
        />
        <button type="submit" aria-label={t('terminal.run')}>
          <i className="fas fa-arrow-right" />
        </button>
      </form>

      <div className="terminal-command-list" aria-label={t('terminal.commandsLabel')}>
        {COMMANDS.map((command) => (
          <button key={command} type="button" onClick={() => setInput(command)}>
            {command}
          </button>
        ))}
      </div>
    </aside>
  )
}
