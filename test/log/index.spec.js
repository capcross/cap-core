import log from '../../src/log'

describe('cap-log', () => {
  describe('exceptionless execution', () => {
    it('exceptionlessly print trace message', () => {
      log.trace('trace message');
    })

    it('exceptionlessly print debug message', () => {
      log.debug('debug message');
    })

    it('exceptionlessly print info message', () => {
      log.info('info message');
    })

    it('exceptionlessly print warn message', () => {
      log.warn('warn message');
    })

    it('exceptionlessly print error message', () => {
      log.error('error message');
    })

    it('exceptionlessly print fatal message', () => {
      log.fatal('fatal message');
    })
  })

  // describe('format of messages', () => {
  //   throw new Error('Not implemented yet');    
  // })

  // describe('filtering by level', () => {
  //   throw new Error('Not implemented yet');    
  // })
}) 