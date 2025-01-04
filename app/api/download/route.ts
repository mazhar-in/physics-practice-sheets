import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filename = searchParams.get('file')

  if (!filename) {
    return new NextResponse('File not specified', { status: 400 })
  }

  try {
    // In a real application, you would store PDFs in a cloud storage service
    // This is just an example response
    return new NextResponse('PDF content would be served here', {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return new NextResponse('Error downloading file', { status: 500 })
  }
}

