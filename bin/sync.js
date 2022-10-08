#!/usr/bin/env node

import { sync } from '@symbo.ls/socket'
import { program } from './program.js'

program
  .command('sync')
  .description('Sync with Symbols')
  .action(async () => {
    sync()
  })