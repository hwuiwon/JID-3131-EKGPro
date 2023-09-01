import { NextResponse } from 'next/server';

import { API_BASE_URL } from '@/constant';
import { APIException, APIExceptionCode } from '@/exception/APIException';

// Retrieve a patient's data.
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const patientId = params.id;
    const response = await fetch(`${API_BASE_URL}/patient/${patientId}`, {
      method: 'GET',
    });

    const data = await response.json();

    if (!response.ok) {
      console.log('Error from API side: ' + response.statusText);
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error retrieving API response: ' + error);

    return NextResponse.json(
      new APIException(
        APIExceptionCode.UNKNOWN_ERROR,
        error instanceof Error ? error.message : 'Unknown Error'
      ).toJSON()
    );
  }
}

// Delete a patient.
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const patientId = params.id;

  try {
    const response = await fetch(`${API_BASE_URL}/patient/${patientId}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    if (!response.ok) {
      console.log('Error from API side: ' + response.statusText);
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error retrieving API response: ' + error);

    return NextResponse.json(
      new APIException(
        APIExceptionCode.UNKNOWN_ERROR,
        error instanceof Error ? error.message : 'Unknown Error'
      ).toJSON()
    );
  }
}
