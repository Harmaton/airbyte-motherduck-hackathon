import { Module } from '@nestjs/common';
import { MotherduckService } from './motherduck.service';

@Module({
  providers: [MotherduckService],
  exports: [MotherduckService],
})
export class MotherduckModule {}
